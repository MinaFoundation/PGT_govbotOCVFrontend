FROM node:22

WORKDIR /app

COPY package.json package-lock.json database.sqlite ./

RUN npm ci

COPY . .

EXPOSE 4321

# TODO: in the future, build and then run. For now, expose the dev server
CMD ["npm", "run", "dev"]
