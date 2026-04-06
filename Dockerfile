FROM node:22.14.0-alpine

WORKDIR /app

# Instala as dependências primeiro
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Faz o build do frontend pelo Vite
RUN npm run build

# Expõe as portas e variáveis de ambiente
EXPOSE 80
ENV PORT=80
ENV NIXPACKS_NODE_VERSION=22.14.0

# Inicia o servidor Node Backend que atende a /dist
CMD ["npm", "start"]
