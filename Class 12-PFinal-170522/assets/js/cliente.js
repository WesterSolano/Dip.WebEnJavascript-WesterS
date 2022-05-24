const clienteForm = document.querySelector("#cliente-form");
const dbUrl = "http://localhost:3000/customers";
const encabezado = {
    'Content-Type':'application/json'
}


function guardarCliente(event)
{
    event.preventDefault();
    const inputs = event.target.elements;
    const cliente = {
        name: inputs["nombre"].value,
        address: inputs["direccion"].value,
        email: inputs["correo"].value,
        ip: inputs["ip"].value,
    }

    const configuracion ={
        method: "POST", /*`${metodo}`,*/
        body: JSON.stringify(cliente),
        headers: encabezado
    }

    fetch(dbUrl, configuracion)
    .then(response => response.json())
    .then(cliente => console.log(cliente))

}
clienteForm.addEventListener("submit",guardarCliente)