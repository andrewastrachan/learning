# base image
FROM 'node:alpine'

WORKDIR /usr/app

# install dependencies
COPY ./package.json ./package.json
RUN npm install

# copy over everything else
COPY ./ ./

# default command
CMD ["npm", "start"]
