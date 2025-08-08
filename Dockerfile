FROM node:22.18.0-slim AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
COPY .env .env

ENV NODE_ENV=production
RUN npm run build


FROM node:20-alpine
WORKDIR /app
COPY --from=build /app ./
COPY --from=build /app/.env .env

ENV NODE_ENV=production
EXPOSE 1337
CMD ["npm", "start"]


