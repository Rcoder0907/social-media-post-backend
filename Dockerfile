FROM node:alpine

RUN mkdir -p /usr/src/photo-comment-backend

WORKDIR /usr/src/photo-comment-backend

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile

COPY . .

ARG NODE_ENV
ARG PORT
ARG MONGODB_URL

RUN chmod +x create-env-file.sh

COPY ecosystem.config.dev.json ./ecosystem.config.json

CMD yarn start
