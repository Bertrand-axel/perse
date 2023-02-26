


FROM thecodingmachine/php:8.2-v4-fpm as perse-php
FROM node:16.10.0 as perse-angular

WORKDIR /var/www/html

RUN	npm install -g typescript@4 && \
	npm install -g @angular/cli@13

