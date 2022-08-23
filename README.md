# node-express-mongo-mysql-sqlite3-socketio-normalizr-passport 

la base de datos fue removida de los archivos en las siguientes rutas (src/config.js code-line: 12.) (src/server.js, code-line: 36.), Por ende, deberás crearte y copiar la url de tu base de mongo antes de iniciar el servidor. esto es para mejorar la seguridad y pertenencias de datos, y así evitar hackeos. O simplemente insertar la url de una base de datos de mongo ya creada y encriptarle datos... También sirve. 
También el método .env a sido implementado. cuidado a la hora de iniciar el server y no haber comprobado tener todo en orden
asegurarse de crear el archivo .env y tener sus keys y values.

ejemplo de URL: mongodb+srv://bauti:bauti@cluster0.pcdnxq9.mongodb.net/ecommerce-node-project?retryWrites=true&w=majority <<<---- no funciona :D

by: Ribeiro Bautista. 