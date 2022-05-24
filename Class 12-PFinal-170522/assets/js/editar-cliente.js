const dbUrl = "http://localhost:3000/customers";

function ObtenerParametros(param){
    const parametros = new URLSearchParams(location.search)
    //console.log(parametros.getAll)
    return parametros.get(param)
}


const encabezado = {
    'Content-Type':'application/json'
}

window.addEventListener("load", event => {
    const id = ObtenerParametros("id");
    llamarApi(`${dbUrl}/${id}`, "GET", {})
    .then(cliente => console.log(cliente))
})

function guardarCliente(event)
{
    event.preventDefault();
    const inputs = event.target.elements;
    let cliente = {
        id: inputs["id"].value,
        name: inputs["nombre"].value,
        address: inputs["direccion"].value,
        email: inputs["correo"].value,
        ip: inputs["ip"].value,
    } 

    llamarApi(dbUrl,"POST",cliente);
}

function llamarApi(url, metodo, data){
    let configuracion ={};
    if (metodo == "GET") {
        configuracion ={
            method: metodo, /*`${metodo}`,*/
            headers: encabezado
        }
    }else{

        configuracion ={
            method: metodo, /*`${metodo}`,*/
            body: JSON.stringify(cliente),
            headers: encabezado
        }
    }
    return fetch(dbUrl, configuracion)
    .then(response => response.json())
    .then(cliente => console.log(cliente))
}

const clienteForm = document.querySelector("#actualizarCliente-form");
clienteForm.addEventListener("submit",guardarCliente)