ARG NODE_VERSION=19-alpine3.16
ARG NGINX_VERSION=1.23.3-alpine

FROM node:${NODE_VERSION} as WildWonderHub_dev
WORKDIR /usr/src/app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY vite.config.js vite.config.js

RUN set -eux; \
    npm install
COPY . ./
VOLUME node_modules
EXPOSE 5173
CMD "npm" "start"