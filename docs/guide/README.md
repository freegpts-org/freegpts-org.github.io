# 使用教程

::: danger
freegpts.org 对终端用户为免费服务,但严禁用于逆向 API,脚本调用,撞库等行为.
:::

## 如何获取 accessToken

在 ChatGPT 官网[https://chatgpt.com](https://chatgpt.com)注册账号并登录后,访问[https://chatgpt.com/api/auth/session](https://chatgpt.com/api/auth/session)获取 accessToken.

## 账号在官网降智了怎么办

官网会对使用者 IP，设备，账号等信息进行监控，如果发现异常会进行降智处理。freegpts.org 已经通过多种方式规避降智问题.

## 如何拥有同款直登站

::: tip
chat.freegpst.org 提供直登站服务,可自定义域名及登陆页部分区域显示内容,本服务为面向站长及号商的付费服务.
:::

首先,[联系客服](https://work.weixin.qq.com/kfid/kfc97c97206f588c396) 购买授权.

然后,将授权域名 cname 至 chat.freegpts.org,并按照客服指引配置 txt 记录进行验证.

## 如何自定义直登站登陆页

在获取授权后,可自定义域名及登陆页部分区域显示内容.

例如,您获得授权的自定义域名为 `chat.example.com`.

您可以通过创建以下 txt 解析记录来自定义内容

```txt
freegpts-header.chat.example.com. 3600 IN TXT "欢迎回来,请登录"
freegpts-footer.chat.example.com. 3600 IN TXT "<a href="https://freegpts.org" target="_blank">镜像站介绍</a>"
freegpts-notice.chat.example.com. 3600 IN TXT "本站为镜像站,请勿用于逆向API,脚本调用,撞库等行为.如需购买账号,请访问<a href="https://www.baidu.com">点我购买</a>"
```
