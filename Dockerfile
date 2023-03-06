FROM node:latest as angular

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=angular /usr/local/app/dist/ang-supabase /usr/share/nginx/html

EXPOSE 80
