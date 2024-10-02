#!/bin/bash

echo "Iniciando proceso de despliegue..."

# Cambiar al directorio donde se clonará el repositorio
cd /home/estudiante/Desktop || exit 1

# Clonar el repositorio (si ya existe, lo eliminamos primero)
if [ -d "front-admin" ]; then
    echo "Eliminando el directorio existente de front-admin..."
    rm -rf front-admin
fi

echo "Clonando el repositorio..."
git clone https://github.com/InnovaTech-arquitectura/front-admin.git

# Cambiar al directorio del repositorio clonado
cd front-admin || exit 1

echo "Deteniendo y eliminando contenedor existente..."
docker stop front-admin-container || true
docker rm front-admin-container || true

echo "Construyendo y ejecutando los contenedores Docker..."
docker-compose up --build -d

echo "Despliegue completado."
