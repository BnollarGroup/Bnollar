FROM node:16 AS builder

# Create src directory
WORKDIR /src

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

COPY . .

RUN npm run build

FROM node:16
EXPOSE 3000

CMD [ "npm", "run", "start" ]