var parrafo = document.getElementById("parrafo");

var n = parseInt(prompt());
var b = 1;
if (n == 0) {
	console.log("espacio en blanco");
}else{
	do{
		var m = 1;
		b++;
		do{
			m++;
		}while(b % m != 0);
		if (m == b) {
			parrafo.innerHTML += b + "<br>";
		}else{
			n++;
		}
	}while(n + 1 != b); 
}