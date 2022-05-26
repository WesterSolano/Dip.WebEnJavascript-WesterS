const url = "http://localhost:3000/customers";

window.addEventListener("load", event=> {
    const id = getParam("id");
    CallApi(`${url}/${id}`, "GET", {})
    .then( cliente => {
        const clienteForm = document.querySelector("#cliente-form")
        clienteForm.elements["id"].value = cliente.id
        clienteForm.elements["nombre"].value = cliente.firtName
        clienteForm.elements["apellido"].value = cliente.lastName
        clienteForm.elements["correo"].value = cliente.email
        clienteForm.elements["direccion"].value = cliente.customerAddress
    })
})


// obtener formulario, para editarlo
const clienteForm = document.querySelector("#cliente-form")


// creamos funcion del formulario
function salvarCliente(event) {
    event.preventDefault()

    // 1. obtener datos del formulario
    const inputs = event.target.elements;
    const cliente = {
        firtName: inputs["nombre"].value,
        lastName: inputs["apellido"].value,
        email: inputs["correo"].value,
        customerAddress: inputs["direccion"].value,
    }

    // 2. enviar datos al API
    CallApi(`${url}/${cliente.id}`, "PUT", cliente)
    .then( () => {
        if (confirm(`Desea volver al listado de clientes?`)) {
            window.history.back()
        }
    })
}


// 3. Agregar evento al formulario
clienteForm.addEventListener("submit", salvarCliente)