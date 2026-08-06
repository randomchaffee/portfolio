# build
# notes to self: docker build -t portfolio:v0.1 .
# notes to self: docker rm -f portfolio
# notes to self: docker run --name portfolio -it -p 80:80 portfolio:v0.1
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# production
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]