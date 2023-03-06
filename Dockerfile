FROM node:latest as angular

WORKDIR /usr/local/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY --from=angular /usr/local/app/dist/ang-supabase /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
