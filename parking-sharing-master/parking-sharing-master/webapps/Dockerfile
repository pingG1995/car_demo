FROM registry.paas/library/nginx:1.17.9
COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html
RUN chmod -R o+rX /usr/share/nginx
