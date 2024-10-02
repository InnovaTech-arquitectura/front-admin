#!/bin/bash

echo "Iniciando proceso de despliegue..."

# Cambiar al directorio donde se va a copiar el repositorio
DEST_DIR="/home/estudiante/Desktop/front-admin"

echo "Deteniendo y eliminando contenedor existente..."
docker stop front-admin-container || true
docker rm front-admin-container || true

# Eliminar el directorio existente, si existe
rm -rf "$DEST_DIR"

# Crear un nuevo directorio para el despliegue
mkdir -p "$DEST_DIR"

# Copiar los archivos del repositorio al servidor
scp -r * estudiante@10.43.101.107:"$DEST_DIR"

# Cambiar al directorio de despliegue
cd "$DEST_DIR" || exit 1  # Esto te llevará al directorio donde se encuentra docker-compose.yml

echo "Construyendo y ejecutando los contenedores Docker..."
docker-compose up --build -d

echo "Despliegue completado."
