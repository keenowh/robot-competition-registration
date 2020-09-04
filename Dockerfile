FROM node:12

ENV NODE_ENV=production

WORKDIR /tmp

COPY ./package*.json /tmp/

RUN npm install

WORKDIR /backend

RUN cp -avr /tmp/node_modules /backend/node_modules

COPY . /backend/

EXPOSE 5000

CMD ["node", "server.js"]
