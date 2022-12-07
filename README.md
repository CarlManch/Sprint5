# nrc2244
Grupo Uninorte Ciclo 4a 2022-2
## Pasos proyecto Instaya
1. instalar node-modules con el comando 
~~~
npm-install
~~~
2. agregar en web ruta principal el archivo .env.development.local, dentro digitar:
~~~
# .env.development
VITE_API_URL=http://localhost:2999/api
~~~
3. dentro del server crear el archivo nodemon.json en la ruta principal y llenar de acuerdo al ejemplo, reemplazar los datos.
4. crear la carpeta keys y dentro de ella crear las 4 keys requeridas de acuerdo al ejemplo, reemplazar los datos.
5. Ejecutar primero server y luego web

### Importante
Una vez realizado el paso de despliegue, debemos de configurar las variables de entorno en nuestro proyecto, para esto podemos ejecutar el comando 
~~~
netlify env:set VITE_API_URL <url de tu proyecto en netlify>
~~~
