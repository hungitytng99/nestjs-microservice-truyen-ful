###################
# BUILD FOR LOCAL DEVELOPMENT
###################
FROM node:16-slim AS development
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
# RUN npm run build
CMD ["npm", "run", "start:dev"]
