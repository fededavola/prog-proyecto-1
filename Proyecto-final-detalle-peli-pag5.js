window.addEventListener("load", function(){
var apiKey = "887f975aad1edef3410134273e134d4f"

var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('idDePelicula');

var url = "https://api.themoviedb.org/3/movie/"+ id +"?api_key=" + apiKey+ "&language=en-US"
fetch(url)
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion){
    console.log(informacion);

    console.log(informacion);
    var titulo
    var poster
    var posterUrl
    var image
    var id
    var genres
    var language
    var sinopsis
    var trailer
    var releaseDate
      // informacion[i]
      // console.log(informacion.results[i]);
      id = informacion.id
      titulo = informacion.title
      poster = informacion.poster_path
      posterUrl= 'https://image.tmdb.org/t/p/original/'
      image = posterUrl + poster
      genres = informacion.genres
      language = informacion.original_language
      sinopsis = informacion.overview
      releaseDate = informacion.release_date
      trailer = informacion.video
      if (trailer==false) {
        //trailer == src=http://encinart.org/wp-content/uploads/2017/01/Video-no.jpg
      }

      // console.log(image);
      var parrafoGeneros = ""
      for (var i = 0; i < genres.length; i++) {
        // genres[i].id
        parrafoGeneros += "<a href='Proyecto-final-genero-de-lista-pag3.html?idGenero="+genres[i].id+"'>" + genres[i].name + "</a> "
        }
        console.log(parrafoGeneros);

        var detallesDePelicula = document.querySelector("#lista-pelicula-detalles")
        var peliculaFavorita;
        peliculaFavorita= "<li class='container-detallesDePelicula'>"
        peliculaFavorita+=  "<div class='left-container-detallesDePelicula'>"
        peliculaFavorita+=    "<div class='poster-de-peli '>"
        peliculaFavorita+=      "<img src='"+ image +"' alt=''>"
        peliculaFavorita+=    "</div>"
        peliculaFavorita+=  "</div>"
        peliculaFavorita+=  "<div class='right-container-detallesDePelicula'>"
        peliculaFavorita+=    "<div class='titulo-de-pelicula detalle-en-texto'>"
        peliculaFavorita+=      "<h2>"+titulo+"</h2>"
        peliculaFavorita+=      "<button onclick='agregarFavoritos("+id+")' class='estrella'> &#9733;</button>"
        peliculaFavorita+=    "</div>"
        peliculaFavorita+=    "<div class='sinopsis detalle-en-texto'>"
        peliculaFavorita+=      "<p>Sinopsis: "+ sinopsis +"</p>"
        peliculaFavorita+=    "</div>"
        peliculaFavorita+=    "<div class='genero-de-peli detalle-en-texto'>"
        peliculaFavorita+=      "<h5>Generos:"+parrafoGeneros+"</h5>"
        peliculaFavorita+=    "</div>"
        peliculaFavorita+=    "<div class='lenguaje-original detalle-en-texto'>"
        peliculaFavorita+=      "<h5>Lenguaje de la pelicula: "+ language +"</h5>"
        peliculaFavorita+=    "</div>"
        peliculaFavorita+=    "<div class='fecha-de-estreno detalle-en-texto'>"
        peliculaFavorita+=      "<h5>Fecha de estreno: "+ releaseDate +"</h5>"
        peliculaFavorita+=    "</div>"
        peliculaFavorita+=    "<div class='trailer-de-peli'>"
        peliculaFavorita+=     "<video src='"+ trailer +"' autoplay poster=''></video>"
        peliculaFavorita+=    "</div>"
        peliculaFavorita+=  "</div>"
        peliculaFavorita+= "</li>"

        console.log(peliculaFavorita);
        detallesDePelicula.innerHTML += peliculaFavorita
      // <!-- <div class="titulo-de-pelicula detalle-en-texto">
      //   Titulo de Pelicula:
      // </div>
      // <div class="genero-de-peli detalle-en-texto">
      //   <a href="#">Genero:</a>
      // </div>
      // <div class="lenguaje-original detalle-en-texto">
      //   Lenguaje original:
      // </div>
      // <div class="sinopsis detalle-en-texto">
      //   Sinopsis:
      // </div>
      // <div class="fecha-de-estreno detalle-en-texto">
      //   Fecha de estreno:
      // </div>
      // <div class="poster-de-peli ">
      //   <img src="" alt="">
      // </div>
      // <div class="trailer-de-peli">
      //   <video src="videofile.ogg" autoplay poster="posterimage.jpg">
      //
      //   </video>
      // </div> -->


  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
var urlRecomendados = "https://api.themoviedb.org/3/movie/"+ id +"/recommendations?api_key="+ apiKey +"&page=1"
fetch(urlRecomendados)
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion);
    var titulo
    var poster
    var posterUrl
    var image
    var id
    for (var i = 0; i < informacion.results.length; i++) {
       //informacion[i]
    console.log(informacion.results[i]);
    id = informacion.results[i].id
    titulo = informacion.results[i].title
    poster = informacion.results[i].poster_path
    posterUrl= 'https://image.tmdb.org/t/p/original/'
    image = posterUrl + poster
console.log(image);

 var listadoPeliculasRecomendadas = document.querySelector(".listado-peliculas-recomendadas")
   listadoPeliculasRecomendadas.innerHTML += "<section class='container-peliculas-recomendadas'><li><a href='Proyecto-final-detalle-peli-pag5.html?idDePelicula="+ id +"'><p class='titulo-pelis-home'>"+ titulo +'</p><img src="'+ image +'" alt=""></a></li></section>'
    }

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })


})


//funcion para agregar a favoritos
function agregarFavoritos(id){
//  alert("me clickearon!")
console.log("este es el id de la peli");
  console.log(id);
  if (window.sessionStorage.getItem("nombre") != null) {
    function mostrarBotonDeFavoritos(){
      document.querySelector("button.estrella").style.display = "block"
  }
  var arrayDePelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita"))
  // en caso que sea nulo, lo creo vacio
  if (arrayDePelisFavoritas == null) {
    arrayDePelisFavoritas = []
  }

  console.log("este es el contenido del array en session");
  console.log(arrayDePelisFavoritas);

  // controlo si el ID de la peli clickeada esta como favorita
  if (arrayDePelisFavoritas.indexOf(id)==-1) {
    // la peli no esta, entonces la agrego
    alert("agregado a favoritos")
    arrayDePelisFavoritas.push(id)
    window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
  } else {
    // si esta la elimino
    alert("eliminado de favoritos")
    arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(id),1)
    window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
  }

  console.log(JSON.parse(window.sessionStorage.getItem("favorita")));
}
}
function mostrarRecomendaciones(){
  document.querySelector("div.oculto").style.display = "block"
}
