FROM node:18

WORKDIR /app

# Install simple static server
RUN npm install -g serve

# Copy frontend files
COPY . .

# Expose port
EXPOSE 3000

# Serve frontend
CMD ["serve", "-s", ".", "-l", "3000"]