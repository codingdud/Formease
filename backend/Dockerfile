# Fetching the minified node image on apline linux
FROM node:19-alpine3.16

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install 
RUN npm install supervisor cross-env pm2 -g

# Starting our application
#CMD [ "node", "app.js" ]

RUN cross-env NODE_ENV=production PORT=5001



EXPOSE 5001

# CMD [ "npm", "start" ]
RUN pm2 link pxqciywdec9ngvu rsgbhm4b5qd5hw4

#RUN pm2 start app.js


#CMD ["pm2-runtime", "app.js", "-i", "3" ]
CMD ["supervisor","app.js"]


#CMD [ "top" ]
# Exposing server port
