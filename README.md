# 🛍️ E-commerce Microservices Platform

Простой интернет-магазин на микросервисной архитектуре.

## 🚀 Быстрый старт

```bash
# 1. Клонировать проект
git clone https://github.com/fa2pk/ecommerce-microservices-platform.git
cd ecommerce-microservices-platform

# 2. Запустить все сервисы
docker compose up -d

# 3. Проверить что всё работает
docker ps

🛠️ Что внутри
Auth Service - регистрация и вход пользователей

Products Service - управление товарами

MongoDB - база для пользователей и товаров

PostgreSQL - база для заказов

Redis - кеш и сессии

Docker - всё запускается в контейнерах

📁 Структура проекта

backend/
├── auth-service/      # Сервис авторизации
├── products-service/  # Сервис товаров
databases/            # Настройки баз данных
docker-compose.yml    # Конфигурация Docker
