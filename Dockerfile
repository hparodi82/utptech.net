# Build stage
FROM hugomods/hugo:exts-non-root AS builder
WORKDIR /site
COPY --chown=1000:1000 . .
RUN npm install && hugo --minify

# Serve stage
FROM nginx:alpine
COPY --from=builder /site/public /usr/share/nginx/html
EXPOSE 80
