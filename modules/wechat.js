/**
 * Wechat 微信配置实例
 */
class Wechat {
  constructor (options) {
    this.opts = options
  }
  // 处理 ak
  getAccessToken () {
  }

  /**
   * 处理消息
   */
  handleMessage () {
    
  }

  /**
   * 处理授权校验
   */
  handleAuth () {
  }
}


function parseXml2JSON(xml) {
  if (!xml || typeof xml !== 'string') return {};
  
}