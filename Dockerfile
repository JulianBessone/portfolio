FROM node:18.19.0-slim
WORKDIR /app
COPY . .
RUN npm install --force
EXPOSE 3000
CMD ["npm", "run", "dev"]