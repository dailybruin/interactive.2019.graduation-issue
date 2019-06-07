FROM node:10-alpine

WORKDIR /usr/src/server

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
