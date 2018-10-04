var n = parseInt(prompt());
var s;
var m = 0;
var texto = document.getElementById("texto");
for (let i = 1; i <= n;i++) {
	s = n % i;
	if (s == 0) {
		m++
	}
}

if (n == 1) {
	texto.innerHTML = n + " no es un número primo";
}else if (m > 2) {
	texto.innerHTML = n + " no es un número primo";
}else{
	texto.innerHTML = n + " es un número primo";
}