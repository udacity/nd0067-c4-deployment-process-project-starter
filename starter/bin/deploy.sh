#!/bin/sh
set -e

# pull latest changes
git pull

# shut down current version while updating
pm2 kill

# build and start api
npm run api:build
pm2 start npm --name "udagram-api" -- run api:prod 

# build and start frontend 
npm run frontend:build 
pm2 start npm --name "udagram-frontend" -- run frontend:prod 

