// Interacción con el DOM
const contentPrimos = document.getElementById('content-primos');
const numberUI = document.getElementById('number');
let limitOfNumber = parseInt(prompt('Ingrese el límite de números a hallar'));

// Control de errores
if(isNaN(limitOfNumber)){
	contentPrimos.innerHTML = `<li>El limite es invalido</li>`
	numberUI.innerHTML = `Ingresaste un texto 😥`
	throw new Error('NOPE :V')
}

if(limitOfNumber <= 0) {
	contentPrimos.innerHTML = '<li>El limite es invalido</li>'
	numberUI.innerHTML = 'NOPE :V'
	throw new Error('NOPE x2 :V')
}

//Inicio del script
numberUI.innerHTML = limitOfNumber;
let numeroPrimo = 1;

do {
	let number = 1;
	numeroPrimo++;
	do {
		number++;
	} while(numeroPrimo % number != 0);

	if(number == numeroPrimo) {
		contentPrimos.innerHTML += `<li class='content-primos-number'>${numeroPrimo}</li>`;
	}else {
		limitOfNumber++;
	}

} while(limitOfNumber + 1 != numeroPrimo); 

