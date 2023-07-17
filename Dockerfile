FROM node:16.14.2-alpine

RUN mkdir -p /mypet-api
COPY mypet-api /mypet-api

WORKDIR mypet-api
RUN npm install --production

CMD cd mypet-api && npm start

FROM node:16.14.2-alpine

RUN mkdir -p /mypet-platform
COPY mypet-platform /mypet-platform

WORKDIR mypet-platform/nextjs-mypet
RUN npm install --production

CMD npm run build && npm start
