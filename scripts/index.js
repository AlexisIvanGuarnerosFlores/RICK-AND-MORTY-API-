"use strict"

const url = "https://rickandmortyapi.com/api/character"

const getData = async()=> {
    try {
        const response = await fetch(url)
        const datos = await response.json()
        return console.log(datos.results);

    } catch (error) {
        console.log(error);
    }

}
getData();

