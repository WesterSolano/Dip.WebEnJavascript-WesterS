let url = 'http://localhost:3000/customers';
const customerForm = document.querySelector("#cliente-form");

$(document).ready(function () {
    getAllCustomers()

    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal

        var elementId = button.attr("id");
        const btnUpdate = document.getElementById("btnSubmit");

        if (elementId === "btnNewCustomer") {
            console.log("Nuevo cliente")
            btnUpdate.value = "new"
            clearFormModal()

        }
        else if (elementId === "btnUpdate") 
        {

            btnUpdate.value = "update"
            clearFormModal()

            //load data of customer into Form
            var customerId = button.data('whatever')

            console.log("Modificando cliente " + customerId)

            //Populate customer edit Form
            getCustomerById(customerId)
        }
    })

    const btnUpdate = document.getElementById("btnSubmit");

    btnUpdate.addEventListener("click", function () 
    {
        let action = btnUpdate.value;

        const idCliente = document.getElementById("id").value
        const nombre = document.getElementById("nombre").value
        const apellido = document.getElementById("apellido").value
        const correo = document.getElementById("correo").value
        const direccion= document.getElementById("direccion").value


        if (action === "update") {

            //Create object here...
            const customer = {
                id : idCliente,
                firtName: nombre,
                lastName: apellido,
                email: correo,
                customerAddress: direccion
            }
            console.log("Update customer Object:")
            console.log(customer)

            //Call update here...
            updateCustomer(customer)

            //Refresh List
            
            getAllCustomers();

            $('#exampleModal').modal('toggle');

        }
        else if (action === "new") {
            //Call new here...
            //Create object here...

            if (nombre && apellido && correo && direccion) {
                const customer = 
                {
                    firtName: nombre,
                    lastName: apellido,
                    email: correo,
                    customerAddress: direccion
                }
                saveCustomer(customer) //--to be checked----
                //getAllCustomers();
                $('#exampleModal').modal('toggle');
            }
            else {
                
               alert("Debe completar todos los campos.")

            }
        }
    })
    


})

function getAllCustomers() {
    CallApi(url, "GET", {}).then(promiseCustomers => {
        
        $('#customerTable tr[class=autoRow]').remove()

        promiseCustomers.forEach(customers => {
            const data = `<tr class="autoRow">
            <th scope="row" class="register-id">${customers.id}</th>
            <td class="register-customerName">${customers.firtName}</td>
            <td>${customers.lastName}</td>
            <td>${customers.email}</td>
            <td>${customers.customerAddress}</td>
            <td>
               <button type="button" class="btn btn-primary" value="${customers.id}" id="btnUpdate" data-toggle="modal" data-target="#exampleModal" data-whatever="${customers.id}" ><i class="fas fa-edit"></i></button>
               <button type="button" class="btn btn-danger" value="${customers.id}"  id="btnDelete${customers.id}"><i class="far fa-trash-alt"></i></button>
            </td>
       </tr>`

            $('#customerTable tr:last').after(data);
            console.log(data)

            //deleting a customer from data table list
            const btnDelete = document.getElementById(`btnDelete${customers.id}`);
            console.log(btnDelete)
            deleteCustomer(btnDelete, customers.id);
        });


    });
}


function getCustomerById(id) 
{
    CallApi(`${url}/${id}`, "GET", {}).then(customerPromise => {
        console.log(customerPromise)

        /*let userId = customerPromise.id
        let name = customerPromise.firtName
        let userName = customerPromise.lastName
        let PassWord = customerPromise.email
        let Role = customerPromise.customerAddress*/

        document.getElementById("id").value = customerPromise.id;
        document.getElementById("nombre").value = customerPromise.firtName;
        document.getElementById("apellido").value = customerPromise.lastName;
        document.getElementById("correo").value = customerPromise.email;
        document.getElementById("direccion").value = customerPromise.customerAddress;


    }).catch(function (e) {
        console.log(e);

        Swal.fire({
            icon: 'error',
            title: 'Cliente no encontrado.',
            text: `El cliente id ${id} no fue encontrado.`,
            footer: 'Favor validar su conexion a internet.'
        })
    });

}



function deleteCustomer(button, customerId) {
    button.addEventListener("click", event => {

        swal({
            title: "Are you sure ?",
            text: "You want to delete customer: " + customerId,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    CallApi(`${url}/${customerId}`, "DELETE", {})
                        .then(() => window.location.reload())

                    swal("User was deleted successfully", {
                        icon: "success",
                    });


                } else {

                }
            })
    })
}


function saveCustomer(customer)
{
    /*event.preventDefault();
    const inputs = event.target.elements;
    const cliente = {
        firtName: inputs["nombre"].value,
        lastName: inputs["apellido"].value,
        email: inputs["correo"].value,
        customerAddress: inputs["direccion"].value,
    }*/

    if (!validateTableCustomerName(customer.firtName)) {
        swal({
            title: "Cliente guardado!",
            text: "El cliente: " + customer.firtName +" fue registrado Exitosamente!",
            icon: "success",
        })
            .then((willDelete) => {
                if (willDelete) {
    
                    CallApi(url,"POST",customer)
                    getAllCustomers();
                } else {
    
                }
            })
    }   
    else 
    {
        alert(`Este nombre de cliente ${customer.firtName} existe`)
    }
}

/*function updateCustomer1()
{
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
}*/

function updateCustomer(customer) {
    //let url = `http://localhost:3000/customers/${customer.id}`

    CallApi(`${url}/${customer.id}`, "PUT", customer).then(prom => {
        console.log(prom)
    })
}

function clearFormModal(){
    /*const inputs = event.target.elements
    inputs["nombre"].value ="",
    inputs["apellido"].value =null,
    inputs["correo"].value=null,
    inputs["direccion"].value =null*/

    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("direccion").value = "";
}

//Save customer in button click
//customerForm.addEventListener("click",saveCustomer)
//customerForm.addEventListener("submit",clearFormModal)


function CallApi(url, method, data) {

    let config = {};
    const header = {
        'Content-Type': 'application/json'
    }

    if (method == "GET") {
        config = {
            method: method,
            headers: header
        }
    }
    else {
        config = {
            method: method,
            headers: header,
            body: JSON.stringify(data)
        }

    }

    return fetch(url, config).then(response => {
        return response.json()
    })
}


function validateTableCustomerName(customerName) {
    let alreadyExist = false

    let table = document.querySelectorAll("#customerTable td.register-customerName");

    for (const iterator of table) {
        let currentCustomerName = iterator.innerHTML;

        console.log("Current customer name: " + currentCustomerName);
        console.log("Parameter customer name: " + customerName);

        if (currentCustomerName == customerName) {
            alreadyExist = true;
            break;
        }
        else {
            alreadyExist = false
            continue;
        }
    }

    console.log("Customer Name already Exist? " + alreadyExist)
    return alreadyExist
}