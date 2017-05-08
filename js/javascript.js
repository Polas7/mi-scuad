function Scuad(nombre, apellido, edad, hobbie){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.hobbie = hobbie;
	}

const Pola = new Scuad("Pola", "Urra", 28, ["Dormir", "ver Netflix", "Salir Familia"]);
const Nat= new Scuad("Nat", "Garrido", 27, ["Loca de los Gatos", "ver Series", "tener Annastacias the Princess"]);
const Vane = new Scuad("Vanessa", "Perez", 28, ["Familia", "cantar", "Karate-Do"]);
const Mina= new Scuad("Romina","Torres", 31, ["Ver series", "tocar instrumentos", "disfrutar familia"])
const Katerine = new Scuad(" Katerine", "Saldoval", 24, ["Arte", "Musica", "Literatura"] )
const Paulina = new Scuad("Paulina", "Gonzalez", 26, ["Hacer manualidades", "videojuegos", "series"])


var arr=[]
arr.push(Pola,Nat,Vane,Mina,Katerine,Paulina)
//un array para tener a todas y un push para agregarle los valores, vacio
var acumulador = document.getElementById("persona")
var escribir = "";
console.log(arr)

//datos de nombre, apellido y edad
arr.forEach(function(miembro){
escribir +=  "<div class = 'datos'> <b>Nombre:</b>"  + miembro.nombre + " " + miembro.apellido 
+"<b> Edad: </b>" 
+miembro.edad + "<br><b> Hobbies: </b>" + "<ul class='datos' >"; 

//salto a la lista de los hobbies con la etiqueta
miembro.hobbie.forEach(function(hobbie){
escribir += "<li>" +hobbie+ "</li>"

});

//lista de botones, de los likes y de texto, casillas
escribir += "</ul>" + "<input type='text' id='texto'/><button onclick='agregar()'>Añadir</button><h3><a id='salida'> </a></h3>" 
+"<input type='button' id='boton' value='Like!' onClick='sumar();'> <div id='contador'>0</div>" 
+ "</div>";

});
acumulador.innerHTML= escribir;


//el forEach nunca me funciono para poder pasar el conteo de likes a todos los miembros del squad :( 
var contador = 1;
function sumar(){
document.getElementById('contador').innerHTML = contador += 1;
};

//funcion de casilla de texto, igual me funciona solo en la primera persona de la lista :( 
var arr = [];
function agregar(){
  var texto = document.getElementById("texto").value;
  var salida = document.getElementById("salida");
  arr.push(texto);
  salida.innerHTML= arr;
    if (i<arr.length-1){
     }
};
    
