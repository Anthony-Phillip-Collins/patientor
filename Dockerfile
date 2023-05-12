# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.15.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="NodeJS"

# NodeJS app lives here
WORKDIR /app

ENV HOST=0.0.0.0
ENV PORT=3333

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install -y python-is-python3 pkg-config build-essential 


# Install node modules
COPY ./package.json ./package-lock.json ./npm.* ./
RUN npm ci


FROM base as build

COPY . .

ENV NODE_ENV=production

# Build the application
RUN npx nx run-many -t=build -p=api,frontend

FROM build as deploy

# Copy built application
COPY --from=build /app /app

# Start the server
CMD [ "node", "dist/apps/api/main.js" ]