FROM node:14-alpine

RUN mkdir /home/web

WORKDIR /home/web

WORKDIR /home/web

COPY  yarn.lock package.json ./

COPY  . .

RUN yarn

CMD [ "yarn", "start" ]

