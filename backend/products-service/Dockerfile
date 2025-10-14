FROM node:18-alpine

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install --only=production

# Копируем исходный код
COPY src/ ./src/

# Создаем не-root пользователя для безопасности
RUN addgroup -g 1001 -S nodejs
RUN adduser -S products-service -u 1001

# Меняем владельца файлов
RUN chown -R products-service:nodejs /app
USER products-service

# Открываем порт
EXPOSE 5002

# Запускаем приложение
CMD ["node", "src/server.js"]
