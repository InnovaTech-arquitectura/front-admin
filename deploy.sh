#!/bin/bash

echo "Iniciando proceso de despliegue..."

# Cambia al directorio donde está el script y los archivos
cd "$(dirname "$0")" || exit 1  # Esto te llevará al directorio donde se encuentra deploy.sh

echo "Deteniendo y eliminando contenedor existente..."
docker stop front-admin-container || true
docker rm front-admin-container || true

echo "Construyendo y ejecutando los contenedores Docker..."
docker-compose up --build -d

echo "Despliegue completado."
