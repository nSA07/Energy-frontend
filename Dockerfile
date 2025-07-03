# ---------- 1️⃣ Build Stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Копіюємо залежності
COPY package*.json ./
RUN npm install

# Копіюємо код проєкту
COPY . .

# Білдимо Vite
RUN npm run build

# ---------- 2️⃣ Nginx Stage ----------
FROM nginx:stable-alpine

# Видаляємо дефолтний конфіг Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копіюємо власний Nginx конфіг
COPY nginx.conf /etc/nginx/conf.d

# Копіюємо білд Vite у папку nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
