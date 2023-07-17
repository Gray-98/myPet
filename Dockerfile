FROM node:16.14.2-alpine

RUN mkdir -p /mypet-api
RUN mkdir -p /mypet-platform

COPY mypet-api /mypet-api
COPY mypet-platform /mypet-platform

WORKDIR mypet-api
RUN npm install --production

WORKDIR mypet-platform/nextjs-mypet
RUN npm install --production

CMD cd mypet-api && npm start
CMD cd mypet-platform/nextjs-mypet && npm build && npm start