FROM node:18.12.0-alpine

# Create a directory for the app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm i --ignore-scripts --dev

# Copy the rest of the application files
COPY . .

# Expose the app's port
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
