# Base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code
COPY . .

# Run format during the build process
RUN npm run format

# Run lint during the build process
RUN npm run lint

# Build the application (if necessary)
RUN npm run build

# Expose the desired port (adjust if necessary)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
