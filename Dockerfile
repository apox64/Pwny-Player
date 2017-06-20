FROM node:boron

# adding /app Folder and copying files in
WORKDIR /app
COPY . /app

#opening port 3000 on container
EXPOSE 3000

# running npm install
RUN npm install webpack -g
RUN npm install

# running commands
CMD webpack
CMD [ "node", "app.js" ]

# RUN cd /app && \
#     npm install
# CMD [ "node", "/app/app.js" ]
