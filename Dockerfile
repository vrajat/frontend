### STAGE 1: Build ###
FROM node:9.11.1 as build
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn install --silent
RUN yarn global add react-scripts --silent
COPY . /app
RUN yarn build --silent --production

# production environment
FROM nginx:1.13.9-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
