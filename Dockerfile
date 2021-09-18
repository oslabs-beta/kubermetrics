FROM node:latest

ENV CI=true

WORKDIR /app
COPY package.json ./

RUN npm install
RUN npm install zingchart-react --legacy-peer-deps
COPY ./ ./

CMD ["npm", "run", "dev"]