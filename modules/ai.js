const axios = require('axios');

class AI {
  constructor () {
    this.options = options
  }

  /**
   * 自动问答接口
   * @tutorial http://docs.yige.ai/Query%E6%8E%A5%E5%8F%A3.html
   * @param query <String> 待处理文本，如果设置自定义分词，请以空格代替
   * @param segmented <Int> 是否已经自定义分词 0为未分词，1为已分词
   * @param replaced <Int> 是否替换机器人答复中的变量，0为不替换，1为替换
   * @param session <String> 字符串token，用户识别客户端和服务端每个会话参数
   * @param state <String | JSON> 用户自定义状态
   * @returns {PromiseLike<T> | Promise<T>}
   */
  fetchAnswer ({query = '', segmented = 0, replaced = 1, session = '', state}) {
    return axios.post(`http://www.yige.ai/v1/query`, {
      token: this.options.token,
      query: query
    }).then(data => {
      return data
    })
  }

  /**
   * 获取所有词库
   * @returns {PromiseLike<T> | Promise<T>}
   */
  fetchEntities () {
    return axios.get(`http://api.yige.ai/v1/entities`).then(data => {
      return data
    })
  }

  /**
   * 获取单个词库
   * @param eid <String> 词库id
   */
  fetchEntity (eid) {
    return axios.get(`http://api.yige.ai/v1/entity${eid}`).then(data => {
      return data
    })
  }

  /**
   * 添加词库
   */
  createEntity () {
    return axios.post(`'/entities`, {}).then(data => {
      return data
    })
  }
}

module.exports = new AI()
