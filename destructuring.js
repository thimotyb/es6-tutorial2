// Mostro come funziona il destructuring
let person = {
	name: "Thimoty",
	surname: "Barbieri",
	cellphone: "1234567",
	email: "thimoty@thimoty.it"

};

// Destructuring dell'oggetto
// Before ECMA 6:
//var name = person.name;
//var surname = person.surname;

({name, surname} = person);

console.log(name);
console.log(surname);