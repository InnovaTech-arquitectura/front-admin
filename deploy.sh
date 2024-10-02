#!/bin/bash

# Mensaje inicial
echo "Iniciando proceso de despliegue..."

# Navegar al directorio del proyecto Angular
cd /home/estudiante/Desktop/front-admin || exit

# Detener y eliminar el contenedor existente si está en ejecución
echo "Deteniendo y eliminando contenedor existente..."
docker-compose down

# Construir y ejecutar los contenedores
echo "Construyendo y ejecutando los contenedores Docker..."
docker-compose up -d --build

# Mensaje final
echo "Despliegue completado con éxito."
