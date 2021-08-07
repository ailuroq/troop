FROM node:14.17.0

WORKDIR /usr/app
ADD . /usr/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install
RUN npm install -g typescript
RUN tsc
RUN ls

EXPOSE 8081

CMD [ "node", "./dist/src/main.js" ]