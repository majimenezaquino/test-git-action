FROM node:12-alpine
WORKDIR /website
COPY . .
RUN npm install
ENV APP_PORT=3000
CMD ["node","src/app.js"]
