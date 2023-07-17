#!/bin/sh
echo "window._env_['VITE_API_URL'] = '$VITE_API_URL';" >> /usr/share/nginx/html/env-config.js
exec "$@"