let arr = ["alma", "körte", "szilva", "dinnye", "szőlő", "barack"];

// kideríteni, hogy egy változó tömb-e. Eredmény: true
console.log(Array.isArray(arr));

// for in ciklus a KULCSOKON, IDEXEKEN meg végig
for (let key in arr) {
	console.log('for in ciklus', key);
};

// for of ciklus az ÉRTÉKEKEN megy végig, CSAK TÖMBÖT TUD BEJÁRNI
for (let value of arr) {
	console.log('for of ciklus', value);
};

let fruits = arr.splice(1, 3, "lemon", "kiwi");

let user = {
	name: "Kiss Ramóna",
	age: 20,
	city: "Bp"
};

let admin = new Object();

let customer = {};

// érték lekérése kulccsal
console.log(user.name);

// kulcsok lekérése
console.log(Object.keys(user));

// értékek lekérése
console.log(Object.values(user));

// objektum bejegyzések lekérése
// => minden egyes kulcs-érték párt egy tömbben fogom megkapni
console.log(Object.entries(user));

// az eregmény az "age" lesz
console.log(Object.entries(user)[1][0]);

// az objektumnak nincs hossz tulajdonsága
// user.length => undefined

// DE! az eredmény: 3
console.log(Object.keys(user).length);

// Objektum bejárása for in ciklussal
for (let k in user) {
	console.log('Key: ', k, 'Value: ', user[k]);
}

// Objektum bejárása for of ciklussal. CSAK TÖMBÖT TUD BEJÁRNI,
// kiolvasom a kulcsokat: az Object.keys(user) az egy már egy TÖMB!
for (let k of Object.keys(user)) {
	console.log(user[k]);
}

// ÉRTÉKEK kiolvasása az objektumból, egy TÖMBBEN adja vissza
for (let value of Object.values(user)) {
	console.log(value);
}