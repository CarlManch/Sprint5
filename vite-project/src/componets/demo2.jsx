import * as ReactDOM from 'react-dom/client';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName : 'Steven',
    lastName : 'Ribon'
};
const element=(
    <h1>
    Hola, {formatName(user)}!
    </h1>
);

function fecha(){
    const elementos =(
        <div>
            <h1>Saludos de su formador</h1>
            <h2> Hola, {formatName(user)}!</h2>
            <h3> Son las { new Date().toLocaleTimeString()}</h3>
        </div>
    );
    dato.render(elementos);
}
setInterval(fecha, 1000);
const dato = ReactDOM.createRoot(document.getElementById('dato'));

