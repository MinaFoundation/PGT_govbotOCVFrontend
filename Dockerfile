FROM node:22

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
CMD ["node", "./dist/server/entry.mjs"]
