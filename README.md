# 🛍️ E-commerce Microservices Platform

![Microservices](https://img.shields.io/badge/Architecture-Microservices-blue)
![Docker](https://img.shields.io/badge/Container-Docker-green)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-brightgreen)

Полнофункциональная e-commerce платформа на микросервисной архитектуре.

## 🏗️ Архитектура
┌─────────────────┐ ┌──────────────────┐
│ React Frontend│ │ API Gateway │
│ (Coming Soon) │ │ (Coming Soon) │
└─────────────────┘ └──────────────────┘
│ │
└───────────────────────┼───────────────────────┘
│
┌─────────────┬─────────────┬─────────────┐
│ │ │ │
▼ ▼ ▼ ▼
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│ Auth │ │Products │ │ Cart │ │ Orders │
│ Service │ │ Service │ │ Service │ │ Service │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
│ │ │ │
▼ ▼ ▼ ▼
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│ MongoDB │ │ MongoDB │ │ Redis │ │PostgreSQL│
└─────────┘ └─────────┘ └─────────┘ └─────────┘
