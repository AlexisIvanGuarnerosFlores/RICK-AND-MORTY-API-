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


    data.forEach(element => {
        let grid_item = document.createElement('div');
        grid_item.classList.add('grid-item');

        grid_item.style.backgroundImage = `url(${element.image})`;
        // grid_item.style.backgroundAttachment = 'fixed';
        grid_item.style.backgroundSize = 'contain';
        // grid_item.style.backgroundPosition = 'center center';


        divPrincipal.appendChild(grid_item);

        
    });

    setObserver();
}



/* Funciones para simular lazy load */
const setObserver = () => {
    const options = {
        threshold: 0.5
    }

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
