From node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

Copy . .

Expose 7000

CMD ["node", "index.js"]
