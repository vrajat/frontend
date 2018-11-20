### STAGE 1: Build ###
FROM node:9.11.1 as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install -g yarn --silent
RUN yarn install --silent
RUN yarn global add react-scripts --silent
COPY . /usr/src/app
RUN npx cra-universal build
WORKDIR /usr/src/app/dist
RUN yarn install --silent --production

### STAGE 2: Production Environment ###
FROM node:9.11.1
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist/ /usr/src/app
EXPOSE 80
ENV PORT 80
ENV CRA_SERVER_PORT 80
WORKDIR /usr/src/app
CMD ["node", "server/bundle.js"]
