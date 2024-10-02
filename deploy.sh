# Script de despliegue (deploy.sh)
echo "Iniciando proceso de despliegue..."

echo "Deteniendo y eliminando contenedor existente..."
docker stop front-admin-container || true
docker rm front-admin-container || true

echo "Construyendo y ejecutando los contenedores Docker..."
docker-compose up --build -d

echo "Despliegue completado."
