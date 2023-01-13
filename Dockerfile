FROM node:alpine

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install --ignore-scripts

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
