FROM node:22 as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY mocks/ ./

RUN yarn install
 
EXPOSE 8080

CMD ["yarn", "start"]
