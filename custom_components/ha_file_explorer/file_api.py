import os, shutil, uuid, yaml, logging, aiohttp, json, urllib, hashlib, datetime, asyncio, base64, re, zipfile, tempfile, time

# Получить текущий список файлов
def get_dir_list(dir):
    allcontent = os.listdir(dir)
    dirItem    = []
    for item in allcontent:
        try:
            # Получить путь к файлу
            path_name = os.path.join(dir,item)
            # Определите, существует ли текущий путь
            if os.path.exists(path_name) == False:
                continue
            hashInfo = {}
            listInfo = os.stat(path_name)
            hashInfo['name'] = item
            hashInfo['path']  = item
            hashInfo['time'] = datetime.datetime.fromtimestamp(int(listInfo.st_mtime)).strftime('%Y-%m-%d %H:%M:%S')

            if os.path.isfile(path_name):
                hashInfo['type'] = 'file'
                hashInfo['size'] = int(listInfo.st_size)
            if os.path.isdir(path_name):
                hashInfo['type'] = 'dir'
                hashInfo['size'] = get_dir_size(path_name)
            # Отображать размер отформатированного файла
            hashInfo['size_name'] = format_byte(hashInfo['size'])
            dirItem.append(hashInfo)
        except Exception as ex:
            print(ex)
    # Отсортировано по названию
    dirItem.sort(key=lambda x: x['name'], reverse=True)
    return dirItem

# Создать каталог
def mkdir(path):
    if os.path.isdir(path) == False:
        folders = []
        while not os.path.isdir(path):
            path, suffix = os.path.split(path)
            folders.append(suffix)
        for folder in folders[::-1]:
            path = os.path.join(path, folder)
            os.mkdir(path)

# Получить размер каталога
def get_dir_size(dir):
    size = 0
    for root, dirs, files in os.walk(dir):
        size += sum([os.path.getsize(os.path.join(root, name)) for name in files])
    return size

# Функция для форматирования размера файла
def format_byte(res):
    bu = 1024
    if res < bu:
        res = f'{bu}B'
    elif bu <= res < bu**2:
        res = f'{round(res / bu, 2)}KB'
    elif bu**2 <= res < bu**3:
        res = f'{round(res / bu**2, 2)}MB'
    elif bu**3 <= res < bu**4:
        res = f'{round(res / bu**3, 2)}GB'
    elif bu**4 <= res < bu**5:
        res = f'{round(res / bu**4, 2)}TB'
    return res

# удалить файл
def delete_file(file_path):
    if os.path.exists(file_path):
        if os.path.isfile(file_path):
            #  удалить файл
            os.remove(file_path)
        elif os.path.isdir(file_path):
            # Удалить каталог
            shutil.rmtree(file_path, ignore_errors=True)

# Перемещать файлы
def move_file(source_file, target_file):
    # 创建目录
    lastIndex = target_file.replace('\\','/').rindex('/')
    _dir = target_file[0:lastIndex]
    if os.path.isdir(_dir) == False:
        mkdir(_dir)
    shutil.move(source_file, target_file)

# Скопировать файл
def copy_file(source_file, target_file):
    # 创建目录
    lastIndex = target_file.replace('\\','/').rindex('/')
    _dir = target_file[0:lastIndex]
    if os.path.isdir(_dir) == False:
        mkdir(_dir)
    shutil.copy2(source_file, target_file)

# Загрузить yaml
def load_yaml(file_path):
    # Если он не существует, возвращается пустой словарь
    if os.path.exists(file_path) == False:
        return {}
    fs = open(file_path, encoding="UTF-8")
    data = yaml.load(fs, Loader=yaml.FullLoader)
    return data

# Хранится как yaml
def save_yaml(file_path, data):
    _dict = {}
    _dict.update(data)
    with open(file_path, 'w') as f:
        yaml.dump(_dict, f)

# загружать json
def load_json(file_path):
    # Если он не существует, возвращается пустой словарь
    if os.path.exists(file_path) == False:
        return {}
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        return data

# Хранится как json
def save_json(file_path, data):
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)

# Загружать содержимое
def load_content(file_path):
    fp = open(file_path, 'r', encoding='UTF-8')
    content = fp.read()
    fp.close()
    return content

# Сохранение содержимого
def save_content(file_path, data):
    fp = open(file_path, 'w+', encoding='UTF-8')
    fp.write(data)
    fp.close()

# base64 Файл для генерации данных
def base64_to_file(base64_data, file):
    ori_image_data = base64.b64decode(base64_data)
    fout = open(file, 'wb')
    fout.write(ori_image_data)
    fout.close()

def load_json(file_path):
    # Если он не существует, возвращается пустой словарь
    if os.path.exists(file_path) == False:
        return {}
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        return data

async def download(url, file_path):
    headers = {'User-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5'}
    connector = aiohttp.TCPConnector(verify_ssl=False)
    async with aiohttp.ClientSession(headers=headers, connector=connector) as session:
        async with session.get(url) as response:
            file = await response.read()
            with open(file_path, 'wb') as f:
                f.write(file)
