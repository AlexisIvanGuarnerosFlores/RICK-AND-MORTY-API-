const renderSelect = (data) => {

    //aqui
    let select = document.querySelector("#genres");
    let { gender} = data;
  
    genres.forEach((gender) => {
      // Creamos el nuevo elemento <option>
      let option = document.createElement("option");
      // Agregamos el atributo "value"
      option.setAttribute("value", gender.male);
      // Agregamos el texto que corresponde
      option.innerText = gender.name;
      // Insertamos el <option> generado dentro del elemento <select>
      select.appendChild(option);
    });
  
  };
  
  
  
    
    }
  
    document.querySelector("#genres").addEventListener("change", function(evt){
      
      let movies;
      let genre_id = evt.target.value;
      sortByName();
  
  
      if(genre_id==""){
        movies=movies_array;
      }else{
        movies= movies_array.filter(function(movie){
          return movie.genre_ids?.includes(parseInt(genre_id));
        });
      }
      
      renderMovies(movies);
  
    })
  