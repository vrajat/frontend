### STAGE 1: Build ###
FROM node:9.11.1-alpine as build
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn install --silent
RUN yarn global add react-scripts --silent
COPY . /app
RUN npx cra-universal build
WORKDIR /app/dist
RUN yarn install --silent --production

### STAGE 2: Production Environment ###
FROM node:9.11.1-alpine
WORKDIR /app
COPY --from=build /app/dist/ /app
EXPOSE 80
ENV PORT 80
ENV CRA_SERVER_PORT 80
WORKDIR /app
CMD ["node", "server/bundle.js"]
