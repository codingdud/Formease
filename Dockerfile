FROM node:19-alpine3.16

WORKDIR /app


#copy as source code from ./
COPY package*.json ./


RUN npm install && npm install -g serve

COPY  . .

ENV REACT_APP_BASE_URL=http://localhost:3000

ENV PORT=3000

EXPOSE 3000



RUN npm run build

#CMD [ "npm", "start" ]

CMD serve -s build