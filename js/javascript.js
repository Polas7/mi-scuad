function MiembrosSquad(id,nombre,apellido,edad,hobbies){
	this.id=id;
	this.nombre=nombre;
	this.apellido=apellido;
	this.edad=edad;
	this.hobbies=hobbies;
}

var comentario=[];
function Comentario(compañeras, comentarios,likes){
	this.compañeras=compañeras;
	this.comentarios=comentarios;
	this.likes=likes;
}

var squad=[];
/*instancia de cada persona del squad*/
var Pola = new MiembrosSquad(1, "Pola", "Urra", 28, ["Dormir", "ver Netflix", "Salir Familia"]);
var Nat= new MiembrosSquad(2, "Nat", "Garrido", 27, ["Loca de los Gatos", "ver Series", "tener Annastacias the Princess"]);
var Vane = new MiembrosSquad(5, "Vanessa", "Perez", 28, ["Familia", "cantar", "Karate-Do"]);
var Mina= new MiembrosSquad(6, "Romina","Torres", 31, ["Ver series", "tocar instrumentos", "disfrutar familia"]);
var Katerine = new MiembrosSquad(3, " Katerine", "Saldoval", 24, ["Arte", "Musica", "Literatura" ]);
var Paulina = new MiembrosSquad(7, "Paulina", "Gonzalez", 26, ["Hacer manualidades", "videojuegos", "series"]);

squad.push(Pola, Nat, Vane, Mina, Katerine, Paulina);

function imprimir(gente){
	var contiene= document.getElementById("amigas");
	var texto= "";
	squad.forEach(function(gente){
	texto += 
"<div>" + "<img src=img/" + gente.id + ".jpg>" + "</div>" +"<div>" + gente.nombre + " " + gente.apellido +
 " " + gente.edad +"</div>"
gente.hobbies.forEach(function(hobbies){
	texto += "<li>" + hobbies + "</li>";
	});
texto += "<h3> Comentarios </h3>" + "<div id='contenido" + gente.id + "'>"+"</div>" + 
"<textarea id='text" + gente.id + "'>" + "</textarea>" + "<button id='boto' onclick='agrega(" + gente.id +  ")'>Comentarios"+"</button>";
	});
	contiene.innerHTML = texto;

}

/*comentarios*/
function agrega(genteId){
/*Se rescata el valor del textarea con su id mas la propiedad.id*/
var textArea= document.getElementById('text' + genteId).value;
/*llamo a genteId para rescatar el valor y asociarlo al id*/
var cajaComentario= document.getElementById("contenido" + genteId);
console.log(cajaComentario);
/*creo mi instancia y le paso los paramatros , que usaré la id de la gente , 
lo que tengo en mi textarea y mi contador q comienza en cero*/
var coment = new Comentario(genteId,textArea,0);
comentario.push(coment);
/*para imprimier el comentario llamo a mi caja contenedora que recibe ese Id , 
y lo imprimo agregando dinamicamente los comentarios
para eso le paso mi instancia con la propiedad de mi constructor 
comentario que en este caso se llama comentarios*/
cajaComentario.innerHTML += "<p>" + coment.comentarios + "</p>" + 
"<button id='boton' onclick='darLike(this)'>Me Gusta"+"</button>" + "<span>" + 0 + "</span>";
 // para limpiar el comentario
textArea=" ";
}

function darLike(click){
/*contador para los like del corazón, le asigno una variable que sume mis likes y pongo mi parametro y le paso la propiedad 
nextSibling, que hace que me tome el hermano que sigue a la etiqueta que tiene la funcion darLike, en este caso el 
hermano del botón es el span luego le paso la variable suma lo imprimo en html, 
le pongo +1 para que se agregue de uno en uno a medida que hago click. */
var suma= click.nextSibling;
suma.innerHTML = parseInt(suma.innerHTML) + 1;
}
//llamo a mi función imprimir 
imprimir();
