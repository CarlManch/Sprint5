const request = require('request');


request('https://jsonplaceholder.typicode.com/users', (error, response, body) =>{
    if(error){
        console.error(`No se pudo realizar la consulta por : ${error.message}`);
        return;
    }
    if(response.statusCode != 200){
        console.error(`Se esperaba un codigo 200 pero salio este codigo: ${response.statusCode}`);
        return;
    }
    console.log('Procesando la lista de usuarios');
    usuarios = JSON.parse(body);
    usuarios.forEach(element => {
        console.log(`${element['name']}, ${element['email']}`);
    });
    
});
