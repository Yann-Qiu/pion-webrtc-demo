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
<br>如果需要走turn，需要在浏览器console里执行如下命令
```
localStorage.setItem('ice-config','xxxxxxxxxxx')
```
<br>
