FROM node:16.14.2-alpine

ENV ROOT_APP_DIR=/mypet

RUN mkdir -p /mypet-api
RUN mkdir -p /mypet-platform

COPY mypet-api $ROOT_APP_DIR/mypet-api
COPY mypet-platform $ROOT_APP_DIR/mypet-platform

WORKDIR mypet-api/package.json
RUN npm install --production

WORKDIR mypet-platform/nextjs-mypet/package.json
RUN npm install --production

CMD cd mypet-api && npm start
CMD cd mypet-platform/nextjs-mypet && npm build && npm start