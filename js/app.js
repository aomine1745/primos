const contentPrimos = document.getElementById('content-primos');
let limitOfNumber = parseInt(prompt('Ingrese el límite de números a hallar'));
const number = document.getElementById('number');
number.innerHTML = limitOfNumber;
let primo = 1;

if(limitOfNumber <= 0) {
	contentPrimos.innerHTML += 'El límite no es válido'
}else {
	do {
		let counter = 1;
		primo++;
		do {
			counter++;
		}while(primo % counter != 0);
		if(counter == primo) {
			contentPrimos.innerHTML += `<li class='content-primos-number'>${primo}</li>`;
		}else {
			limitOfNumber++;
		}
	}while(limitOfNumber + 1 != primo); 
}