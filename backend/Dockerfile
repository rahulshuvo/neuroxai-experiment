# Use Node 22 Alpine
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# 👇 KEY CHANGE: Install ALL dependencies (including devDependencies like tsx)
RUN npm install

COPY . .

EXPOSE 5000

# Default to dev mode
CMD ["npm", "run", "dev"]