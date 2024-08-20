import os
from homeassistant.components.http import HomeAssistantView
from .file_api import delete_file, get_dir_list, mkdir, load_content, save_content

from .manifest import manifest

DOMAIN = manifest.domain
API_URL = f"/{DOMAIN}-api"

class HttpApi(HomeAssistantView):

    url = API_URL
    name = DOMAIN
    requires_auth = True

    # format path
    def get_config_path(self, path):
        config_path = path.lstrip('/')
        if config_path[:2] == './':
                config_path = config_path[2:]
        return config_path

    # get file list or file content
    async def get(self, request):
        hass = request.app["hass"]
        query = request.query
        act = query.get('act', '')
        config_path = self.get_config_path(query.get('path', ''))
        path = hass.config.path(config_path)
        if act == 'content':
            data = await hass.async_add_executor_job(load_content, path)
            return self.json({ 'code': 0, 'data': data})

        data = await hass.async_add_executor_job(get_dir_list, path)
        return self.json(data) 

    # delete file or folder
    async def delete(self, request):
        hass = request.app["hass"]
        query = request.query
        config_path = self.get_config_path(query.get('path', ''))
        path = hass.config.path(config_path)
        await hass.async_add_executor_job(delete_file, path)
        return self.json({ 'code': 0, 'msg': 'Успешно удален'})

    # add file or folder
    async def put(self, request):
        hass = request.app["hass"]
        query = request.query
        act = query.get('act', '')
        body = await request.json()
        config_path = self.get_config_path(body.get('path'))
        path = hass.config.path(config_path)

        # rename file or folder
        if act == 'rename':
            new_path = hass.config.path(self.get_config_path(body.get('new_path')))
            if os.path.exists(new_path):
                return self.json({ 'code': 1, 'msg': 'Такое же название уже существует'})

            os.rename(path, new_path)
            return self.json({ 'code': 0, 'msg': 'Успешная операция'})

        # create file or folder
        if os.path.exists(path):
            return self.json({ 'code': 1, 'msg': 'Такое же название уже существует'})

        if act == 'file':
            await hass.async_add_executor_job(save_content, path, '')
        elif act == 'folder':
            await hass.async_add_executor_job(mkdir, path)

        return self.json({ 'code': 0, 'msg': 'Успешно создан'})

    async def post(self, request):
        # Ограничение на количество файлов устанавливается следующим образом 100MB
        request.app._client_max_size = 1024**2 * 100
        hass = request.app["hass"]
        # Загрузить файл
        query = request.query
        if query.get('path') is not None:
            config_path = self.get_config_path(query.get('path'))
            path = hass.config.path(config_path)
            dir_path = path[:path.rindex('/')]
            reader = await request.multipart()
            file = await reader.next()
            # print(file.filename)
            await hass.async_add_executor_job(mkdir, dir_path)
            # create file
            size = 0
            with open(path, 'wb') as f:
                while True:
                    chunk = await file.read_chunk()  #Размер загружаемого файла по умолчанию составляет 8192 байта。
                    if not chunk:
                        break
                    size += len(chunk)
                    f.write(chunk)
            return self.json({ 'code': 0, 'msg': 'Успешная загрузка'})
        else:
            body = await request.json()
            config_path = self.get_config_path(body.get('path'))
            path = hass.config.path(config_path)
            await hass.async_add_executor_job(save_content, path, body.get('data'))
            return self.json({ 'code': 0, 'msg': 'Успешно сохранен'})
