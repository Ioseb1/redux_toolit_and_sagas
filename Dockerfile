
FROM node:22 as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN yarn install
 
COPY . .
 
EXPOSE 5173

CMD ["yarn", "dev"]