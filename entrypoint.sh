#!/bin/sh
echo "window._env_['LOCAL'] = '$LOCAL';" >> /usr/share/nginx/html/env-config.js
exec "$@"