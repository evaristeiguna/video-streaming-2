FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm start --omit=dev
COPY ./videos ./videos
CMD [ "node", "index.js" ]
