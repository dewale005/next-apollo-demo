FROM node:16

WORKDIR /client/app

COPY ./package.json /package.json

RUN yarn install

COPY . /

EXPOSE 3000

CMD ["yarn", "dev"]