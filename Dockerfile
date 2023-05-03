FROM node:18-alpine

# RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
