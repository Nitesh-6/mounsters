# Use the Node.js 16 LTS image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Install `serve` to serve the React application
RUN npm install -g serve

# Expose port 5000
EXPOSE 5000

# Serve the application
CMD ["serve", "-s", "build", "-l", "5000"]
