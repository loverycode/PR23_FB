Проект демонстрирует балансировку нагрузки с использованием Docker и Nginx.  
Запущены 3 backend-сервера на Node.js и балансировщик Nginx, который распределяет запросы между ними.

## Технологии

- Docker
- Docker Compose
- Node.js + Express
- Nginx

## Запуск проекта

```bash
docker compose up --build

1. Проверка round-robin распределения

bash
curl http://localhost:8080
curl http://localhost:8080
curl http://localhost:8080
curl http://localhost:8080
for i in {1..10}; do curl -s http://localhost:8080 | grep server; done

Тестирование отказоустойчивости

bash
docker compose stop backend1
curl http://localhost:8080
curl http://localhost:8080

docker compose stop backend2
curl http://localhost:8080


docker compose start backend1 backend2
