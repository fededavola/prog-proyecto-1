window.addEventListener("load",function(){

var apiKey = "887f975aad1edef3410134273e134d4f"

  var urlParams = new URLSearchParams(window.location.search);
  var query = urlParams.get('idDeGenero');
  var genero =urlParams.get('genero')

  var peliculaPorGeneroUrl = ("https://api.themoviedb.org/3/discover/movie?api_key="+ apiKey +"&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=" +query)

  fetch(peliculaPorGeneroUrl)
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion){
      console.log(informacion);

      var arrayPeliculasPorGenero = informacion.results
      console.log(arrayPeliculasPorGenero);

      document.querySelector(".nombreGenero").innerHTML = genero

      for (var i = 0; i < arrayPeliculasPorGenero.length; i++) {
        var id = arrayPeliculasPorGenero[i].id
        var titulo = arrayPeliculasPorGenero[i].title
        var url= arrayPeliculasPorGenero[i].poster_path

        // <li>
        //     <img src="images/slider1.jpg" alt="">
        //     <div class="uk-position-center uk-panel"><h1>1</h1></div>
        // </li>

        document.querySelector('ul.peliculasporgenero').innerHTML += "<li><a href='Proyecto-final-detalle-peli-pag5.html?idDePelicula="+ id +"'><p class='titulo-pelis-home'>"+ titulo +'</p><img src="https://image.tmdb.org/t/p/original/'+ url +'" alt=""></a></li>'
      }
    })
    .catch(function(error){
      console.log("Error" + error);
    })

})
