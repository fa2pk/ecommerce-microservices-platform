FROM node:18-alpine

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install --only=production

# Копируем исходный код
COPY src/ ./src/

# Создаем не-root пользователя для безопасности
RUN addgroup -g 1001 -S nodejs
RUN adduser -S auth-service -u 1001

# Меняем владельца файлов
RUN chown -R auth-service:nodejs /app
USER auth-service

# Открываем порт
EXPOSE 5001

# Запускаем приложение
CMD ["node", "src/server.js"]
