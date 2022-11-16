FROM node:alpine

LABEL name="Node Application" \   
     maintainer="Hassan R. Shaikh<hassan.shaikh@yahoo.com>" \
     summary="A Node Sample application"


# Create app directory
WORKDIR /app

COPY . .
RUN npm install


CMD [ "node", "index.js" ]