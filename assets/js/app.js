// Name key , Default
const KEY = "3a3d762901bf1fff70f1dd05e068e691";
//name key , Test
const KEY_TEST = "f81a3ef3651095d9d22fbca96b86840d";

// Funcion que genera el objeto XMLHttpRequest
function loadDoc(url, cFuntion) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cFuntion(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
// Funcion que mustra por consola el objeto
function viewresult(httpclient) {
  let objetito = JSON.parse(httpclient.response);
  //console.log(objetito);
  insertRowHeader(objetito);
}
function generaObjeto(httpclient) {
  let objetito = JSON.parse(httpclient.response);
  insertRowHeaderRandom(objetito);
}
function generaObjeto2(httpclient) {
  let objetito = JSON.parse(httpclient.response);
  //console.log(objetito);
}
function generarUrlForLatLonWeather(array) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${array[1]}&lon=${array[0]}&appid=${KEY}&units=metric&lang=sp`;
}
function generarUrlForLatLonOneCall(array) {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${array[1]}&lon=${array[0]}&appid=${KEY}&units=metric&lang=sp`;
}
// Verificacion de soporte de geolocation

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (objPosition) {
    var lon = objPosition.coords.longitude,
      lat = objPosition.coords.latitude;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric&lang$es`;
    loadDoc(url, viewresult);
  });
} else {
  console.error("No hay soporte para la geolocalizacion ");
}

let city_home_cordenadas = [
  [-60.0, -36.0], //Buenos Aires"
  [-57.557541, -38.002281], //Mar del Plata
  [-57.954529, -34.921452], //La Plata
];
for (i in city_home_cordenadas) {
  loadDoc(generarUrlForLatLonWeather(city_home_cordenadas[i]), viewresult);
}

let city_random_cordns = [];

// Funcion que inyecta la card con el clima por localizacion geografica
/*
function insertRowHeader(objeto) {
  divHEader = document.querySelector("#cards");
  const element = document.createElement("div");
  element.classList.add("col-12");
  element.classList.add("col-lg-2");
  element.classList.add("card");
  element.classList.add("mx-1");
  element.classList.add("mt-3");
  element.classList.add("cardClima");

  element.innerHTML = `
  <div>
  <h4 class="card-title text-primary"><strong>${objeto.name}</strong></h4>
  <p class="card-text">Temperatura:<strong>${objeto.main.temp}	&#176</strong><br>
  Temperatura maxima:<strong>${objeto.main.temp_max}</strong>	&#176;<br>
  Temp minima: <strong>${objeto.main.temp_min}</strong>	&#176;<br>
  </p></div>
  `;
  divHEader.appendChild(element);
}
/*
function insertRowHeaderRandom(objeto) {
  divHEader = document.querySelector("#cards-random");
  const element = document.createElement("div");
  element.classList.add("col-sm-4");
  element.classList.add("col-12");

  element.classList.add("card");
  element.classList.add("mx-1");
  element.classList.add("mt-3");
  element.classList.add("cardClima");
  element.innerHTML = `
  <div class="ca">
    <div class="card-body">
    <img src="http://openweathermap.org/img/wn/${objeto.weather[0].icon}.png">
      <h3 class="card-title text-primary">${objeto.name}</h3>
      <p class="card-text ">Pronostico: ${objeto.weather[0].description}</p>

      <ul class="list-group">
      <li class="list-group-item">Temperatura ${objeto.main.temp}&#176</li>

      <li class="list-group-item">Temperatura Maxima ${objeto.main.temp_max}&#176</li>
      <li class="list-group-item">Temperatura Minima ${objeto.main.temp_min}&#176</li>
      <li class="list-group-item">Sensacion Termica ${objeto.main.feels_like}&#176</li>
      <li class="list-group-item">Humedad: ${objeto.main.humidity}&#37;
      </li>
    </ul>
      
    </div>
  </div>`;
  divHEader.appendChild(element);
}
*/
buenosAires = [-60.0, -36.0];
loadDoc(generarUrlForLatLonWeather(buenosAires), generaObjeto);
capital = [-58.450001, -34.599998];
loadDoc(generarUrlForLatLonWeather(capital), generaObjeto);
cordoba = [-64.0, -32.0];
loadDoc(generarUrlForLatLonWeather(cordoba), generaObjeto);
chubut = [-69.0, -44.0];
loadDoc(generarUrlForLatLonOneCall(chubut), generaObjeto2);
chubut = [-69.0, -44.0];
loadDoc(generarUrlForLatLonWeather(chubut), generaObjeto);

// ---------------Buton funcion buscador------------------


document.querySelector("#Buscar-city").addEventListener("click", function () {
  let valueCityBuscador = document.getElementById("texto").value;
  let valueCityBuscadortotal = document.getElementById("texto");
valueCityBuscadortotal.value = ""
  
  console.log("Funciona esta otra funciun");
  Obtenerdatos(valueCityBuscador);
  
});

function Obtenerdatos(urlCity) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${urlCity}&appid=${KEY}&units=metric&lang=sp`;
  const api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  api.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let dato = JSON.parse(this.responseText);
      mostrarNav(dato);
    }
  };
}

function mostrarNav(dato) {
  divHEader = document.querySelector("#navInyectar");
  const element = document.createElement("div");
  element.setAttribute("id","idPrueba")
  element.classList.add("col-12");
  element.classList.add("col-md-7");
  element.classList.add("p-2")
  element.classList.add("row");
  element.classList.add("d-flex")
  //element.classList.add("align-items-center")

  console.log(dato);
  element.innerHTML = `

  <div class="col-2 rounded ">
  <img  src="http://openweathermap.org/img/wn/${dato.weather[0].icon}.png">
</div>
<div class="col-md-2 mx-3 bg-info rounded text-center border ">
<h5><strong>${dato.name}</strong></h5>
<h6>${dato.weather[0].description}
</div>
 <div class="col-md-2 col-12  mx-3 bg-info rounded  border >
 <h6 class ="text-center">
 <strong>Temperatura</strong></h6>
 <p class ="text-light text-center"><strong>${dato.main.temp} &#176;	</strong></p></div>
 <div class="col-md-2 col-12 mx-3 bg-info rounded  border">
 <h6 class =" mt-1 text-center">
 <strong>Maxima</strong></h6>
 <p class ="text-danger text-center"><strong>${dato.main.temp_max} &#176;	</strong></p></div>
 <div class="col-md-2 col-12  mx-3 bg-info rounded border ">
 <h6 class ="mt-1 text-center " >
 <strong>Minima</strong></h6>
 <p class ="text-primary text-center"><strong>${dato.main.temp_min} &#176;	</strong></p></div>
 `;
  divHEader.appendChild(element);
}
