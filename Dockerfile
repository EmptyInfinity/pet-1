FROM node:lts-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3000
EXPOSE 4000

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn install
RUN yarn global add foreman @vue/cli

RUN apk update && apk add bash

COPY . /usr/src/app