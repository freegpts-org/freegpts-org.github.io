# 反代教程

我们提供了公共镜像站,地址为 [https://chat.freegpts.org/](https://chat.freegpts.org/), 你可以直接使用.

你也可以通过反代的方式绑定自己的域名使用, 以下是反代教程.

以下教程中, 你需要将 `chat.xxx.com` 替换为你自己的域名.

## Caddy

```caddyfile
chat.xxx.com {
	reverse_proxy https://chat.freegpts.org {
		header_up Host chat.freegpts.org
	}
}
```
## Cloudflare Workers

```javascript
const hostname = "https://chat.freegpts.org";

function handleRequest(request) {
  let url = new URL(request.url);

  return fetch(new Request(hostname + url.pathname, request));
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
```

## Nginx(未测试)

```nginx
server {
    listen 80;
    server_name chat.xxx.com;
    location / {
        proxy_pass https://chat.freegpts.org;
        proxy_set_header Host chat.freegpts.org;
        proxy_buffering off;
        proxy_ssl_server_name on;
    }
}
```

## Apache(未测试)

```apache
<VirtualHost *:80>
    ServerName chat.xxx.com
    ProxyPass / https://chat.freegpts.org/
    ProxyPassReverse / https://chat.freegpts.org/
    ProxyPreserveHost On
</VirtualHost>
```

