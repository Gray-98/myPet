FROM node:16.14.2-alpine

RUN mkdir -p /mypet-api

COPY ./routes /mypet-api/routes
COPY app.js /mypet-api/app.js
COPY package.json package-lock.json ./

RUN npm install --production

CMD npm start
