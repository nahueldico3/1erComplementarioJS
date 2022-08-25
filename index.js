
const birthYear = Number(prompt("ingrese su año de nacimiento"))
const actualYear = 2022
const difference = (actualYear-birthYear);
const condition = difference >= 18;

/*
- Necesito saber cuantos son y si la/s persona/s supera/n el minimo +18
- Necesito saber si necesita alojamiento y si es asi , cual de los disponibles
- Mensaje depende las opciones con los costos de los mismos
*/


if (condition) {
    alert ("Ya que tienes " + difference + " años, podes empezar a armar tu viaje")
} else {
    alert ("Como tienes" + difference + "años, no hay paquetes de viaje para vos")
};

let i = 0;

for (i; i <= 10; i = i ++) {
    console.log("el numero de dias que te vas a quedar es:" + i);
    break;
}

console.log(i);


let inputValue = Number(prompt("adivine el numero correcto del 1 al 10 para un descuento, tienes 3 intentos"));
let counter = 0;

while (inputValue !== 4 && counter < 2) {
    console.log("mala suerte, saque otra carta");
    console.log(counter);
    inputValue = Number(prompt("adivine el numero de la carta del 1 al 10"));
    counter++
}

if (counter < 2) {
    console.log("Adivinaste el numero, tienes un 20% de descuento!");
} else {
    console.log("Ya no tienes mas intentos");
}

let lugar;

do {
    console.log("1. Auto \n 2. Avion \n 3. Micro \n 0. Ninguno");
    lugar = prompt("Elige una movilidad");
    switch (lugar) {
        case "0":
            console.log("Hasta pronto");
        break;
        case "1":
            console.log("Tus destinos para viaje en auto son: Mendoza, Cordoba y Bariloche");
        break;
        case "2":
            console.log("Tus destinos en avion son: Francia, Canada y China");
        break;
        case "3":
            console.log("Tus destinos en micro son: Brasil, Chile y Peru");
        break;
        default:
            console.log("Elige una opcion valida");
        break;
    }

} while (lugar !== "0");