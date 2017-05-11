"use strict";

var a = 10;
var c = 2;
b(); // hoisting
function b() {
	const a = 100;
	if (a === 100) {
		let ciccio = "Ciao!";
		console.log(ciccio);
	}
	// sa = a + 2;
	console.log(a*c);
	
}

//console.log(ciccio);

var person =  {
	name: "Adriana",
	surname:  "Lima",
	greet: function() {
		
		var self = this;
		console.log("Ciao "+self.name+" "+self.surname);

		var altraFunc = function() {
			return self.surname+"!!!";
		}

		console.log(altraFunc());

	}
}

person.greet();

 var ilfattoquotidiano = 3;

 ilfattoquotidiano = ilfattoquotidiano + 2;

console.log(ilfattoquotidiano);



