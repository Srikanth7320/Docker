From node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

Copy . .

Expose 7000

CMD ["node", "index.js"]
