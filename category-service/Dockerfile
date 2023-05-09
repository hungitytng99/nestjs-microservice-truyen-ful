###################
# BUILD FOR LOCAL DEVELOPMENT
###################
FROM node:16-alpine AS development
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
RUN npm install
COPY . /usr/src/app
# RUN npm run build
CMD ["npm", "run", "start:dev"]