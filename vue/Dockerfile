FROM node:20.3.1-alpine
WORKDIR /usr/src/vue

RUN apk update && \
    npm install -g npm @vue/cli

# 開発サーバの起動
CMD ["npm", "run", "serve"]