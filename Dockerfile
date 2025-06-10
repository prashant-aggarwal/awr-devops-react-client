# Stage 1: Build React app
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies and build the app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve using a lightweight web server (nginx)
FROM nginx:stable-alpine

# Copy built React app to nginx public folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config (optional, for SPA support)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]