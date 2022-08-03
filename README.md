# pion-webrtc-demo
使用webrtc的datachannel与对端(assistd)进行文字聊天的小demo。

## QuickStart

### Development

```bash
$ npm install
$ npm run start
$ open http://localhost:9090/
```
自行在html中修改信令joinRoom的参数(device_id以及token)
<br>如果需要走turn，有两个方法（二选一）:
1. 在浏览器控制台执行( 自行替换地址信息 )localStorage.setItem('ice-config','{"iceServers":[{"urls":"turn:yanfeng:1233?transport=udp","credential":"test@test","credentialType":"password","username":"123"}]}')
2. 取消index.html代码98 - 115行注释， 并修改具体地址信息
<br>
