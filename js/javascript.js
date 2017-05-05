function Scuad(nombre, apellido, edad, hobbie){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.hobbie = hobbie;
		
		this.mostrarScuad = function(){
			return("<b>Nombre </b>" + this.nombre+ " " + this.apellido + " <b>Edad</b> " + this.edad + " Años " + " " + " <b> Hobbies </b>" + this.hobbie)
		}
}

const Pola = new Scuad("Pola", "Urra", 28, "Dormir, ver Netflix, Salir Familia");
const Nat= new Scuad("Nat", "Garrido", 27, "Loca de los Gatos, ver Series, tener Annastacias the Princess");
const Vane = new Scuad("Vanessa", "Perez", 28, "Familia, cantar, Karate-Do");
const Mina= new Scuad("Romina","Torres", 31, "Ver series, tocar instrumentos, disfrutar familia" )
const Katerine = new Scuad(" Katerine", "Saldoval", 24, "Arte, Musica, Literatura" )
const Paulina = new Scuad("Paulina", "Gonzalez", 26, "Hacer manualidades, videojuegos, series")

var arr=[]
arr.push(Pola,Nat,Vane,Mina,Katerine,Paulina)
//un array para tener a todas y un push para agregarle los valores, vacio
arr.forEach(function(una){
   document.write("<div>"+"<b>Nombre: </b>" +una.nombre+" "+ una.apellido+"<b> Edad: </b>" + una.edad +"<b><li> Hobbies: </b>"+ una.hobbie+"</li><br></div>")
});
//en esta parte me ayudaron un poquito, porque no me salia la lista, solo con el forEach :) 