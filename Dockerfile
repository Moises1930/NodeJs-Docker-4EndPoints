#Get node image from dockerhub
FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]