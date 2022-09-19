FROM node:16.15.0 AS builder
WORKDIR /build/
ADD package.json ./package.json
ADD package-lock.json ./package-lock.json
RUN npm install
COPY . .
RUN npm run build-storybook

FROM nginx:alpine

EXPOSE 80

COPY --from=builder /build/storybook-static/ /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx /usr/share/nginx/html
