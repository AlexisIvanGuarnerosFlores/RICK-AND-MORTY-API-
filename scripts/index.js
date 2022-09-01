"use strict"

const url = "https://rickandmortyapi.com/api/character/";
const divPrincipal = document.querySelector('#gallery-container');




const getData = async () => {
    try {
        const response = await fetch(url);
        const datos = await response.json();

        print(datos.results);

    } catch (error) {
        console.log(error);
    }

}

const filter =  async () => {
    
    try {
        
        const inputBusqueda = document.querySelector('#input-busqueda').value;
        console.log(inputBusqueda);
        if(inputBusqueda !== undefined){
            const response = await fetch(`${url}?name=${inputBusqueda}`);
            const datos = await response.json();
    
            print(datos.results);
        }


    } catch (error) {
        console.log(error);
    }

}

const print = (data) => {

    console.log(data);

    while(divPrincipal.firstChild){
        divPrincipal.removeChild(divPrincipal.firstChild);
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
}



 getData();



