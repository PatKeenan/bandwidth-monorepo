FROM node:14-alpine

RUN mkdir /home/server

WORKDIR /home/server

WORKDIR /home/server

COPY  package.json ./

COPY  . .

RUN yarn

CMD [ "yarn", "start" ]



