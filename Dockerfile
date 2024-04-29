FROM node:20 as development
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm i
COPY . .
EXPOSE 3000

# FROM development as dev-envs

# ENV NODE_ENV production
# RUN npm ci --only=production
CMD [ "npm","start" ]