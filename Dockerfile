FROM node:16
WORKDIR /app
COPY package.json .
ARG NODE_DEV
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install npm@9.4.2 -g
RUN npm install pnpm@8.1.1 -g
RUN if [ "$NODE_DEV" = "development" ]; \
      then pnpm install; \
      else pnpm install --omit=dev; \
      fi
COPY . ./
ENV APP_PORT 3000
EXPOSE $APP_PORT





