ARG NODE_VERSION=20
FROM node:$NODE_VERSION

WORKDIR /app

COPY . .

RUN npm install

CMD ["nx", "serve", "website"]
