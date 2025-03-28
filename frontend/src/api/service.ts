import store from '../store/index'
async function requestApi(data: any, query = {} as any, method = 'post') {
  store.commit('loading', true)
  const ha = parent.document.querySelector('home-assistant') as any
  const params = { method } as any;
  if (toString.call(data) === '[object FormData]') {
    params.body = data
  } else if (data) {
    params.body = JSON.stringify(data)
  }
  if (method == 'get') {
    query['t'] = Date.now()
  }
  const res = await ha.hass.fetchWithAuth('/ha_file_explorer-api?' + new URLSearchParams(query).toString(), params)
    .finally(() => {
      store.commit('loading', false)
    })
  // 判断是否下载
  if (method == 'get' && query.act == 'download') {
    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    // 获取文件名
    const contentDisposition = res.headers.get('Content-Disposition');
    let filename = 'downloaded_file';
    if (contentDisposition) {
      const match = contentDisposition.match(/filename="?([^"]+)"?/);
      if (match) {
        filename = match[1];
      }
    }
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
    return {}
  }
  return res.json()
}


const service = new Proxy({
  /**
   * 获取文件列表
   * @returns 
   */
  getHassFileList(path: string) {
    return requestApi(null, { act: 'get', path }, 'get')
  },
  /**
   * 获取文件内容
   * @param path 
   * @returns 
   */
  getHassFileContent(path: string) {
    return requestApi(null, { act: 'content', path }, 'get')
  },
  /**
   * 设置文件内容
   * @param path 
   * @returns 
   */
  setHassFileContent(path: string, data: string) {
    return requestApi({ path, data }, {}, 'post')
  },
  /**
   * 设置文件内容
   * @param path 
   * @returns 
   */
  uploadFile(path: string, file: File) {
    const formData = new FormData();
    formData.append("file", file);
    return requestApi(formData, { path }, 'post')
  },
  /**
   * create dir in hass config dir
   * @param path 
   * @returns 
   */
  createHassFile(act: string, path: string) {
    return requestApi({ path }, { act }, 'put')
  },
  rename(path: string, new_path: string) {
    return requestApi({ path, new_path }, { act: 'rename' }, 'put')
  },
  deleteHassFile(path: string) {
    return requestApi(null, { path }, 'delete')
  },
  downloadFile(path: string) {
    return requestApi(null, { act: 'download', path }, 'get')
  }
}, {
  get(target: any, property: string) {
    // console.log(target, property)
    if (property in target) {
      return target[property]
    } else {
      throw new Error(`${property} not in target`)
    }
  }
})


export default service as Service