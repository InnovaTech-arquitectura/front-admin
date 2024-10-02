# Usar una imagen base de Node.js
FROM node:16 AS build

# Configurar el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos del proyecto
COPY package*.json ./
RUN npm install

COPY . .

# Construir la aplicación Angular
RUN npm run build --prod

# Usar una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copiar archivos generados al contenedor de Nginx
COPY --from=build /usr/src/app/dist/front-admin /usr/share/nginx/html

# Copiar la configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
