# This stage installs our modules
FROM mhart/alpine-node:12

EXPOSE 8081
WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm i

ENTRYPOINT ["/usr/local/bin/npm"]
CMD ["run", "dev"]