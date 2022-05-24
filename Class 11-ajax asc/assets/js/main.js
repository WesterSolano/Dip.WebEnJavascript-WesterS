const boton = document.querySelector("#btn-ajax")
const miPronesa = new Promise(function(resolve,reject)
{
    setTimeout(() => {
        let persona ={
            nombre: "Julio",
            edad: 31
        }
        resolve(persona)
    }, 1000);
})

function llamarPromesa(limitTime){
    return new Promise(function(resolve, reject){
        if (limitTime > 3000) {
            reject("Limit Time muy largo...");
        }
        setTimeout(() => 
        {
            let persona ={
                nombre: "San Pedro",
                edad: 90
            }
            resolve(persona);
        }, limitTime)
    })
}

async function evento(event){
    //miPronesa.then(function(persona){ console.log(persona) })  is the same with = miPronesa.then(persona => console.log(persona));
    //miPronesa.then(persona => console.log(persona)); ==>    //persona = await miPronesa.then();
    persona = await llamarPromesa(1000);
    console.log(persona.nombre)
    persona = await llamarPromesa(5000);
    console.log(persona.edad)
};

boton.addEventListener('click', evento);