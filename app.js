/* Base de Datos */

let rutas = [
  {
    id: 1,
    lugares: ['Parque industrial Otay', 'Zona Industrial Murua', 'Parque Chilpancingo', 'Ley Murua', 'Central Camionera', '5 y 10'],
    imagen: 'images/murua.png'
  },
  {
    id: 2,
    lugares: ['5 y 10', 'Blvd Insurgentes', 'Macroplaza', 'El Florido 2da Seccion', 'Mariano Matamoros'],
    imagen: 'images/insurgentes-mariano.png'
  },
  {
    id: 3,
    lugares: ['5 y 10', 'Parque Morelos', 'Estadio Chevron', 'Residencial Insurgentes', 'Colonia Capistrano'],
    imagen: 'images/capistrano.png'
  }
];

/* VARIABLES */
const seleccionarRuta = document.getElementById('seleccionar-calafia');
const lugares = document.querySelector('ol');
const mapa = document.getElementById('img-mapa');

seleccionarRuta.addEventListener('change', buscarInfo);

function buscarInfo(e) {
  for (let ruta of rutas) {
    if (ruta.id === parseInt(e.target.value)) {
      mostrarInfo(ruta);
    }
  }
}

function mostrarInfo(ruta) {
  mapa.src = ruta.imagen;
   
  while (lugares.childElementCount) //limpiamos la lista de lugares
    lugares.removeChild(lugares.firstChild);

  for (let lugar of ruta.lugares) {
    let li = document.createElement('li');
    li.innerText = lugar;
    lugares.appendChild(li);
  }  
}

