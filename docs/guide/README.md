# 反代教程

我们提供了公共镜像站,地址为 [https://chat.freegpts.org/](https://chat.freegpts.org/), 你可以直接使用.

你也可以通过反代的方式绑定自己的域名使用, 以下是反代教程.

以下教程中, 你需要将 `chat.xxx.com` 替换为你自己的域名.

## Caddy

```caddyfile
chat.xxx.com {
    reverse_proxy https://chat.freegpts.org
    header_up Host chat.freegpts.org
}
```

## Nginx

```nginx
server {
    listen 80;
    server_name chat.xxx.com;
    location / {
        proxy_pass https://chat.freegpts.org;
        proxy_set_header Host chat.freegpts.org;
        proxy_buffering off;
    }
}
```

## Apache

```apache
<VirtualHost *:80>
    ServerName chat.xxx.com
    ProxyPass / https://chat.freegpts.org/
    ProxyPassReverse / https://chat.freegpts.org/
    ProxyPreserveHost On
</VirtualHost>
```

## Cloudflare Workers

TODO