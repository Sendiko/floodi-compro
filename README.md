# Floodi website

Static Floodi website served with Bun.

## Run locally

Requires [Bun](https://bun.sh/).

```sh
bun install
cp .env.example .env
bun run start
```

The site is available at <http://localhost:3000>. Use `bun run dev` for
watch mode.

## Run with Docker

```sh
docker build -t floodi-compro .
docker run --rm --env-file .env -p 3000:3000 floodi-compro
```

Set `APP_PORT` in `.env` to change the port used by the Bun server. The
published Docker port should match it, for example:

```sh
docker run --rm --env-file .env -p 8080:8080 floodi-compro
```

The container includes a health check for the homepage.

## Run with Docker Compose

```sh
cp .env.example .env
docker compose up --build
```

Stop the service with:

```sh
docker compose down
```
