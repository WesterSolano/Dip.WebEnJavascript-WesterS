let url = 'http://localhost:3000/customers';
const customerForm = document.querySelector("#cliente-form");

$(document).ready(function () {
    GetAllCustomers()

    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
    })

   /* $("#btnUpdate").on('click', function () {

        updateCustomer()
    })*/
})

function GetAllCustomers() {
    CallApi(url, "GET", {}).then(promiseCustomers => {
        promiseCustomers.forEach(customers => {
            //$('#customerTable1 tr[class=autoRow]').remove()

            const data = `<tr class="autoRow">
            <th scope="row">${customers.id}</th>
            <td>${customers.firtName}</td>
            <td>${customers.lastName}</td>
            <td>${customers.email}</td>
            <td>${customers.customerAddress}</td>
            <td>
               <button type="button" class="btn btn-primary" value="${customers.id}" id="btnUpdate${customers.id}" data-toggle="modal" data-target="#exampleModal" data-whatever="${customers.id}" ><i class="fas fa-edit"></i></button>
               <button type="button" class="btn btn-danger" value="${customers.id}"  id="btnDelete${customers.id}"><i class="far fa-trash-alt"></i></button>
            </td>
       </tr>`

            $('#customerTable tr:last').after(data);
            console.log(data)

            //deleting a customer from data table list
            const btnDelete = document.getElementById(`btnDelete${customers.id}`);
            console.log(btnDelete)
            deleteCustomer(btnDelete, customers.id);

            //updating a customer data
            const btnUpdate = document.getElementById(`btnUpdate${customers.id}`);
            console.log(btnUpdate)
            //btnUpdate.addEventListener("click", updateCustomer())
            //updateCustomer(btnUpdate,customers.id);


        });


    });
}


function deleteCustomer(button, customerId) {
    button.addEventListener("click", event => {

        swal({
            title: "Are you sure ?",
            text: "You want to delete user: " + customerId,
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

        /*if(confirm(`Desea borrar el cliente ${customerId}?`)) {
            CallApi(`${url}/${customerId}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }*/
    })
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

    
    swal({
        title: "Cliente guardado!",
        text: "El cliente: " + cliente.firtName +" fue registrado Exitosamente!",
        icon: "success",
    })
        .then((willDelete) => {
            if (willDelete) {

                CallApi(url,"POST",cliente)
                
            } else {

            }
        })

}

function updateCustomer()
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

    /*swal({
        title: "Cliente actualizado!",
        text: "El cliente: " + cliente.firtName +" fue actualizado Exitosamente!",
        icon: "success",
    })
        .then((willDelete) => {
            if (willDelete) {

                CallApi(url,"PUT",cliente)
                
            } else {

            }
        })*/
}

function cleanForm(event){
    const inputs = event.target.elements
    inputs["nombre"].value ="",
    inputs["apellido"].value =null,
    inputs["correo"].value=null,
    inputs["direccion"].value =null
}

//Save customer in button click
customerForm.addEventListener("submit",saveCustomer)
customerForm.addEventListener("submit",cleanForm)


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