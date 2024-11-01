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

# Instalar dependencias y construir el proyecto Angular
echo "Instalando dependencias de npm..."
npm install

# Configurar entorno y servidor según el parámetro
if [[ $1 == "production" ]]; then
    export ENVIRONMENT=production
    export SERVER_NAME=10.43.100.240
else
    export ENVIRONMENT=testing
    export SERVER_NAME=10.43.101.107
fi

# Imprimir el entorno y servidor configurados
echo "Entorno de ejecución: $ENVIRONMENT"
echo "Servidor configurado: $SERVER_NAME"

# Detener y eliminar contenedores existentes
echo "Deteniendo y eliminando contenedores existentes..."
docker-compose down

# Limpiar imágenes huérfanas y no utilizadas
echo "Limpiando imágenes de Docker no utilizadas..."
docker image prune -f

# Ejecutar docker-compose con el argumento de entorno
echo "Levantando el contenedor con docker-compose..."
docker-compose up --build -d

# Esperar unos segundos para asegurarse de que el contenedor esté activo
sleep 5

# Reiniciar el contenedor de Nginx
echo "Reiniciando Nginx en el contenedor..."
docker exec front-admin-container nginx -s reload

# Verificar el estado de los contenedores
echo "Comprobando estado de los contenedores..."
docker ps

echo "Despliegue completado."
