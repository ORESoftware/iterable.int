FROM node:22.16.0-bookworm-slim

USER root

WORKDIR /app

COPY package.json ./

RUN npm install --omit=dev --ignore-scripts && npm cache clean --force

COPY dist ./dist

ENTRYPOINT ["node", "dist/main.js"]

ENV FORCE_COLOR=1

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV:-production}

CMD ["--default","arg"]
