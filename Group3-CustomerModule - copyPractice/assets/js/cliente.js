const clienteForm = document.querySelector("#cliente-form");
const dbUrl = "http://localhost:3000/customers";
const encabezado = {
    'Content-Type':'application/json'
}


function saveCustomer(event)
{
    event.preventDefault();
    const inputs = event.target.elements;
    const cliente = {
        firtName: inputs["nombre"].value,
        lastName: inputs["apellido"].value,
        email: inputs["correo"].value,
        customerAddress: inputs["direccion"].value,
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
clienteForm.addEventListener("submit",saveCustomer)