FROM node:10-alpine

WORKDIR /src 
COPY package*.json ./
COPY tsconfig.json ./
COPY ormconfig.json ./
COPY src /src

RUN npm install
RUN npm run build

EXPOSE 3333