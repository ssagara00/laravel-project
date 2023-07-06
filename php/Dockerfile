FROM php:8.2-fpm

ENV TZ Asia/Tokyo

# COPY php.ini
COPY php.ini /usr/local/etc/php/php.ini

RUN apt-get update && \
    apt-get -y install \
    zlib1g-dev \
    mariadb-client \
    libzip-dev \
    vim \
    && docker-php-ext-install zip pdo_mysql

# install composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer global require "laravel/installer"

WORKDIR /var/www