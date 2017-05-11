// Dimostrazione delle closure
function salutatore(preambolo) {
	return function(nome) {
		let message = preambolo+", "+nome+"!";
		console.log(message);
		return message;
	}
}

var salutatoreEducato = salutatore("Buongiorno");
var salutatoreAllegro = salutatore("Wellà");

salutatoreEducato("Thimoty");

salutatoreAllegro("Adriana Lima");

salutatore("Fanculo")("Gino Pini");

var saluto = salutatoreAllegro("Emily Ratacosa");
console.log(saluto);
console.log(salutatoreAllegro.toString());