FROM node:16.13.0

WORKDIR /usr/app/front

COPY ./front/package.json ./front/yarn.lock ./

COPY ./cms/paper-cms/models/types.ts ../cms/paper-cms/models/

RUN yarn

COPY ./front ./

RUN yarn build

EXPOSE 3045

CMD yarn start
