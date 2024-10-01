#!/bin/bash

# Mensaje inicial
echo "Iniciando proceso de despliegue..."

# Navegar al directorio del proyecto Angular
cd /home/estudiante/Desktop/front-admin || exit

# Eliminar la carpeta dist para asegurar que no queden archivos antiguos
echo "Eliminando carpeta dist/ antigua..."
rm -rf dist/

# Construir la aplicación Angular en modo producción
echo "Compilando la aplicación Angular..."
ng build --prod

# Verificar si la compilación fue exitosa
if [ $? -eq 0 ]; then
  echo "Compilación exitosa."
else
  echo "Error durante la compilación de Angular."
  exit 1
fi

# Copiar los archivos generados al directorio de Nginx
echo "Copiando archivos a /home/estudiante/Desktop/front-admin..."
cp -R dist/front-admin/* /home/estudiante/Desktop/front-admin/

# Reiniciar el servicio de Nginx
echo "Reiniciando Nginx..."
sudo systemctl restart nginx

# Verificar si Nginx se reinició correctamente
if [ $? -eq 0 ]; then
  echo "Nginx reiniciado correctamente."
else
  echo "Error al reiniciar Nginx."
  exit 1
fi

# Mensaje final
echo "Despliegue completado con éxito."
