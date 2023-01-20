/*
	Utilizando: - switch y operadores ternarios
	Sin usar:   - if / else / else if
*/

//con ternarios
document.querySelector("input").onkeyup = teclado;

function teclado() {
	let resultado1;
	// Lo que el ususario ha escrito y lo warda en variable escrito
	const escrito = Number(document.querySelector("input").value);
	// Siempre ejcuta no compara con condicionales
	switch (true) {
		case escrito >= 0 && escrito < 5:
			resultado1 = "Suspendido";
			break;
		case escrito >= 5 && escrito < 8:
			resultado1 = "Aprobado";
			break;
		case escrito >= 8 && escrito < 9.5:
			resultado1 = "Notable";
			break;
		case escrito >= 9.5 && escrito < 10:
			resultado1 = "Excelente";
			break;
		default:
			resultado1 = "Dato no valido";
	}
	document.querySelector(".uno").innerHTML = resultado1;


	//Con ternarios
	let resultado2;
	escrito >= 0 && escrito < 5
		? resultado2 = "Suspendido"
		:
		escrito >= 5 && escrito < 8
			? resultado2 = "Aprobado"
			:
			escrito >= 8 && escrito < 9.5
				? resultado2 = "Notable"
				:
				escrito >= 9.5 && escrito < 10
					? resultado2 = "Excelente"
					: resultado2 = "Dato no valido"

	document.querySelector(".dos").innerHTML = resultado2;
}