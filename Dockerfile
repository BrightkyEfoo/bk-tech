FROM node:hydrogen-alpine AS build
COPY ./package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /build /usr/share/nginx/html
EXPOSE 80
CMD [ "systemctl","restart","nginx" ]