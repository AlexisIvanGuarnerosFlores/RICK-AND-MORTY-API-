"use strict"

const url = "https://rickandmortyapi.com/api/character/";
const divPrincipal = document.querySelector('#gallery-container');

let cargarMasImagenes = false;


/* Obtener todos los personajes */
const getData = async () => {
    try {
        const response = await fetch(url);
        const datos = await response.json();

        print(datos.results);

    } catch (error) {
        console.log(error);
    }

}

/* Obtener personajes de acuerdo al buscador */
const filter =  async () => {
    
    try {
        cargarMasImagenes = false;
        const inputBusqueda = document.querySelector('#input-busqueda').value;
        
        if(inputBusqueda !== undefined){
            const response = await fetch(`${url}?name=${inputBusqueda}`);
            const datos = await response.json();
    
            print(datos.results);

        }


    } catch (error) {
        console.log(error);
    }

}

/* Pintar resultados obtenidos */
const print = (data) => {

    if(cargarMasImagenes === false){
        while(divPrincipal.firstChild){
            divPrincipal.removeChild(divPrincipal.firstChild);
        }
    }

    // OPCION 1

    // data.forEach(element => {
    //     let grid_item = document.createElement('div');
    //     grid_item.classList.add('grid-item');

    //     grid_item.style.backgroundImage = `url(${element.image})`;
        
    //     grid_item.style.backgroundSize = 'contain';
    //     // grid_item.style.backgroundAttachment = 'fixed';
    //     // grid_item.style.backgroundPosition = 'center center';


     //   divPrincipal.appendChild(grid_item);

        
    //});

    //setObserver();

    // OPCION 2

    for (let n in data) {
        
        document.querySelector("#gallery-container").innerHTML +=
        `
        
        <div class="card bg-success" >
        <img src="${data[n].image}" class="card-img-top" alt="...">
        
        <div class="card-body bg-warning">
            <h5 class="card-title ">${data[n].name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            
            <li class="list-group-item bg-transparent">Species: ${data[n].species}</li>
            <li class="list-group-item bg-info">Gender: ${data[n].gender}</li>
            <li class="list-group-item bg-info">Origin: ${data[n].origin.name}</li>
        </ul>
        <!-- <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div> -->
        </div>`
    }

    setObserver();

}



/* Funciones para simular lazy load */
const setObserver = () => {
    const options = {
        threshold: 0.5
    }
    //     divPrincipal.appendChild(grid_item);
    // });

    const observer = new IntersectionObserver(callback , options);
    observer.observe(divPrincipal.lastElementChild);
}


const callback = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            cargarMasImagenes = true;
            getData();
            // cargarMasImagenes = false;
        }
    })
}

getData();
