const ittPoke = document.getElementById("ittPoke");
const bBuscar = document.getElementById("bBuscar");
const nombrePoke = document.getElementById("nombre");
const imgPoke = document.getElementById("imgPoke");
const numPoke = document.getElementById("numPoke");
const stats = document.querySelectorAll(".stats");
const contenedorPoke = document.getElementById("contenedorPoke");

bBuscar.addEventListener("click", cambiarNombre);

async function cambiarNombre() {
    let nombre = ittPoke.value;
    nombre = nombre. toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;

    try{
        const respuesta = await fetch(url);

        if(respuesta.status == 200)
        {
            let datos = await respuesta.json();
            mostrarPoke(datos);
        }
    }
    catch(error)
    {
       console.log("No se encontro el pokemon");
    }

}


function mostrarPoke(datos)
{
    imgPoke.src = datos.sprites.front_default;
    numPoke.innerText = "num pokemon: " + datos.id;

    let stadisticas = datos.stats;

    console.log(stadisticas);

    
    for(let i=0;i<stats.length;i++)
    {
        stats[i].innerHTML = stadisticas[i].stat.name + ": " + stadisticas[i].base_stat
    }
    
}