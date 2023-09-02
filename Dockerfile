FROM node:18-alpine3.17

WORKDIR /home

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3031

CMD [ "node", "server.js" ]