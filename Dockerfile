FROM node
WORKDIR /usr/src/scheresteinpapier
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 5000

CMD ["/bin/bash","entrypoint.sh"]
