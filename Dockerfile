FROM node:20-slim AS builder

WORKDIR /app
COPY package*.json ./
RUN apt-get update && apt-get upgrade -y && npm install
COPY . .
RUN npm run build
FROM nginx:1.21.1-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
