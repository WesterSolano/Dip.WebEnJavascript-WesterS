const btn = document.querySelector("#btn-listado");
const url = "https://jsonplaceholder.typicode.com/posts";

async function eventoClick(event)
{
    const listado = await fetch(url).then(response => response.json());
    const elementosListado = document.querySelector("#listado")
    
    listado.forEach(datos =>
    {
        const elementPost = document.createElement("div")
        //li.textContent = `Id: ${element.id =50}`
        elementPost.classList.add("post")
        elementPost.textContent = `Id: ${datos.id} | Title: ${datos.title}.`;
        elementosListado.appendChild(elementPost)
    });

    //console.log(listado)
}

btn.addEventListener("click", eventoClick)