FROM node:8.0.0-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --registry=https://registry.npm.taobao.org
COPY . .
EXPOSE 3000
CMD [ "yarn", "start" ]
