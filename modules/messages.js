exports.txtMsg = (toUser, fromUser, content) => {
  let xmlContent = `<xml>
<ToUserName><![CDATA[${toUser}]]></ToUserName>
 <FromUserName><![CDATA[${fromUser}]]></FromUserName>
 <CreateTime>${Date.now()}</CreateTime>
 <MsgType><![CDATA[text]]></MsgType>
 <Content><![CDATA[${content}]]></Content>
 </xml>`
  return xmlContent
}

