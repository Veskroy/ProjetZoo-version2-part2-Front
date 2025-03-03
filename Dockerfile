FROM alpine:3.12

ENV NODE_VERSION=21.7.1
# Dockerfile : phase de développement
FROM node:${NODE_VERSION}alpine as react_development
WORKDIR /usr/src/project

COPY package.json .
COPY package-lock.json .

RUN set -eux; \
npm install;

COPY . ./

CMD ["npm run dev"]

# Dockerfile : phase de construction de l'application
FROM react_development as react_build
RUN set -eux; \
    npm run build;

#Dockerfile : phase du serveur web Nginx
ENV NGINX_VERSION=1.32.0

FROM  nginx:${NGINX_VERSION}alpine as react_nginx

COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/

WORKDIR /usr/src/admin/build

COPY --from=react_build /usr/src/project/dist .