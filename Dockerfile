FROM node:alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY ./public ./public
COPY  ./.next ./.next
COPY  ./node_modules ./node_modules
COPY  ./package.json ./package.json
ENV PATH "$PATH:./node_modules/.bin"
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000
CMD ["next start"]
 