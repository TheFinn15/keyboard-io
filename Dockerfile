FROM node:18.16.1
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --production --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
