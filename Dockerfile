# Etapa 1: Construir la aplicación Angular
FROM node AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# Construir la aplicación en modo producción
RUN npm run build -- --configuration production

# Etapa 2: Configurar Nginx
FROM nginx:alpine

# Copiar la configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=build /app/dist/front-admin /usr/share/nginx/html  # Aquí se usa el nombre correcto de tu proyecto

# Exponer el puerto en el que Nginx escucha
EXPOSE 80
