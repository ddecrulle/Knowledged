
# Production Env
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf    
WORKDIR /usr/share/nginx/html

# Add bash
RUN apk add --no-cache bash

## Copy .env file and shell script to container
ADD dist /usr/share/nginx/html
COPY entrypoint.sh /

## Make shell script executable and prevent windows encoding
RUN sed -i -e 's/\r$//' /entrypoint.sh && chmod +x /entrypoint.sh

# add non-root user
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

# non root users cannot listen on 80
EXPOSE 8080

USER nginx

ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]