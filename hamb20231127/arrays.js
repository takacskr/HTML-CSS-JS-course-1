/*
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
*/

/* let user = {
    name: 'Kiss Ramóna',
    age: 20,
    city: 'Bp',
};

data = {
    weathers: [
        { dayNumber: 0, temperature: 11.2 },
        { dayNumber: 1, temperature: 15.5 },
        { dayNumber: 2, temperature: 18.9 },
        { dayNumber: 3, temperature: 9.0 },
        { dayNumber: 4, temperature: 14.7 },
        { dayNumber: 5, temperature: 20.3 },
        { dayNumber: 6, temperature: 22.8 },
    ],

    offers: [
        { upperLimit: 0, offerMessage: 'Ma forró csokit árusítunk' },
        { upperLimit: 15, offerMessage: '15 fok felett ingyen fagylalt' },
        { upperLimit: 10, offerMessage: '10 fok alatt meleg teát kínálunk' },
        {
            upperLimit: 18,
            offerMessage: '18 fokig 20% kedvezmény minden hűsítőre',
        },
        { upperLimit: 22, offerMessage: '22 fokig strandtörölköző akció' },
        {
            upperLimit: 25,
            offerMessage: '25 fok felett jegeskávé dupla adaggal',
        },
        {
            upperLimit: 26,
            offerMessage: '26 fok felett új, frissítő smoothieink vannak',
        },
    ],
};

for (const offer of data.offers) {
    console.log(offer.offerMessage);
}

function getOfferForTemperature(temperature) {
    // Find the offer for the given temperature
    for (const offer of data.offers) {
        if (temperature <= offer.upperLimit) {
            return offer.offerMessage;
        }
    }

    // If no offer is found, provide a default message
    return 'Nincs ajánlat a megadott hőmérsékletre';
}

// Example: Get the offer for a temperature of 18.5
const temperature = 18.5;
const offer = getOfferForTemperature(temperature);

console.log(`For a temperature of ${temperature}°C, the offer is: ${offer}`);


console.log(Object.entries(data)[0][1][0].temperature);

// A data objektum kulcsait adja vissza: weathers, offers
for (let i = 0; i < Object.values(data).length; i++) {
    console.log(Object.keys(data)[i]);
}

// A data objektumban lévő első kulcsban található objektum i-edik elemének temperature kulcs értékével tér vissza
for (i = 0; i < Object.values(data)[0].length; i++) {
    console.log(Object.values(data)[0][i].temperature);
}

console.log(Object.values(data).length);

for (let i = 0; i < data.weathers.length; i++) {
    console.log(data.weathers[i].temperature);
    console.log(data.offers[i].offerMessage);
}

for (entry of Object.entries(data)) {
    console.log(entry[1][1]);
}

let weathers = Object.entries(data)[0][1];

for (let i = 0; i < weathers.length; i++) {
    console.log(weathers[i]['temperature']);
}

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

// a ciklus végigmegy a KULCS - ÉRTÉK párokon
for (let entry of Object.entries(user)) {
    console.log('entries: ', entry[0], entry[1]);
}
*/

// This method can help you to loop over array’s items.
const arr1 = [1, 2, 3, 4, 5, 6];

arr1.forEach((item) => {
    console.log(item); // output: 1 2 3 4 5 6
});

// This method check if array includes the item passed in the method.
const arr2 = [1, 2, 3, 4, 5, 6];

arr2.includes(2); // output: true
arr2.includes(7); // output: false

// This method create new array with only elements passed condition inside the provided function.
const arr3 = [1, 2, 3, 4, 5, 6];

// item(s) greater than 3
const filtered = arr3.filter((num) => num > 3);
console.log(filtered); // output: [4, 5, 6]

console.log(arr3); // output: [1, 2, 3, 4, 5, 6]

// This method create new array by calling the provided function in every element.
const arr4 = [1, 2, 3, 4, 5, 6];

// add one to every element
const oneAdded = arr4.map((num) => num + 1);
console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]

console.log(arr4); // output: [1, 2, 3, 4, 5, 6]
