# 1️⃣ Білд-етап
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Збірка продакшен білду
RUN npm run build

# 2️⃣ Продакшен етап з nginx
FROM nginx:stable-alpine

# Копіюємо білд у nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Якщо CRA:
# COPY --from=builder /app/build /usr/share/nginx/html

# Копіюємо власний nginx.conf якщо треба (не обов’язково)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

