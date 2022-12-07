# nrc2244
Grupo Uninorte Ciclo 4a 2022-2
## Pasos proyecto Instaya
1. instalar nodemodules con el comando 
npm-install
2. agregar en web ruta principal el archivo .env.development.local, dentro digitar:
~~~
# .env.development
VITE_API_URL=http://localhost:2999/api
~~~
3. dentro del server crear el archivo nodemon.json en la ruta principal y llenar de acuerdo al ejemplo, reemplazar los datos.
4. crear la carpeta keys y dentro de ella crear las 4 keys requeridas de acuerdo al ejemplo, reemplazar los datos.
5. Ejecutar primero server y luego web