# Build stage
FROM hugomods/hugo:exts-non-root AS builder
WORKDIR /site
COPY . .
RUN npm install && hugo --minify

# Serve stage
FROM nginx:alpine
COPY --from=builder /site/public /usr/share/nginx/html
EXPOSE 80
