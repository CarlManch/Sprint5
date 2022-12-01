const fs = require('fs');
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
    let listaUsuarios = '';
    usuarios.forEach(element => {
        listaUsuarios += `${element['name']}, ${element['email']}\n`;
    });

    fs.writeFile('infoUsuarios.csv', listaUsuarios, (error)=>{
        if (error){
            console.error(`no se pudo guardar la lista de usuarios en el archivo por: ${error}`);
            return;
        }
        console.log('Se guardado exitosamente la lista de usuarios');
    });
});
