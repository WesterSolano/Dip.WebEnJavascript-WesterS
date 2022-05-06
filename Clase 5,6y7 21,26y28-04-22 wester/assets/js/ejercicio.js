console.log('Hola Gente!')


const miFormulario = document.querySelector("#myForm")
//console.log(miFormulario);

function eventSubmit(evento)
{
    // evitar que se refresque la pagina
    evento.preventDefault()
    console.log("eventSubmit, say Hi!");
    
    //target es el formulario que dispara el evento: en addEventListener tenemos al button con submit
    const inputs = evento.target.elements;
    console.log(inputs)

    const contenido = inputs["contenido"].value;
    const ancho = inputs[0].value;
    const altura = inputs["altura"].value;
    //const colorFondo = style.backgroundColor = 'thistle';

    console.log("Ancho = ",ancho)
    console.log("Altura = ",altura)
    

        //changing with and height
    const elementoCaja = document.querySelector("#caja")
    elementoCaja.innerText = "***Unidades de medidas enviadas*** ==> \n\n"
    elementoCaja.innerText += "\t-Ancho: "+ancho;
    elementoCaja.innerText += "\n\t-Altura: "+altura;
    elementoCaja.innerText += "\n\n\n***Comentario*** ==> \n"
    elementoCaja.innerText += "\n\t-"+contenido;

    elementoCaja.style.width = ancho + 'vw'
    elementoCaja.style.height = altura+ 'vh'
    elementoCaja.style.backgroundColor = 'thistle';
    elementoCaja.style.borderColor="#FF0000 purple"

   /* document.getElementById("myForm").addEventListener("click", function(event){
        event.preventDefault()
      });*/
};


//
miFormulario.addEventListener("submit", eventSubmit)
