FROM node:17-alpine
LABEL stage=install

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]