FROM node:24-alpine
WORKDIR /app

# Enable PNPM:
RUN corepack enable

# Install dependencies:
COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# Copy all folders and files:
COPY . .

# Define environment variables for execution:
ENV NODE_ENV="production"

# Build React Router:
RUN pnpm run build

# Run the server:
CMD pnpm run start
