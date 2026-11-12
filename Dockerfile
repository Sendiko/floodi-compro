FROM oven/bun:1.4.4-alpine

WORKDIR /app

COPY package.json ./
RUN bun install --production --no-save

COPY server.js ./
COPY public ./public

ENV NODE_ENV=production
ENV APP_PORT=3000

EXPOSE 3000

USER bun

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD ["bun", "-e", "const response = await fetch('http://127.0.0.1:' + process.env.APP_PORT + '/'); process.exit(response.ok ? 0 : 1)"]

CMD ["bun", "run", "server.js"]
