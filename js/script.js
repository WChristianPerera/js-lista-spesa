// Descrizione:
// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for.
//  Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.


const arrList = [
	'pomodori',
	'funghi',
	'latte',
	'carne',
	'caffè',
	'peperoni',
	'biscotti',
	'salmone',
	'pasta',
];

const eleList = document.querySelector('#list');


let i = 0;

while ( i < arrList.length ) {
	eleList.innerHTML += `<li>${arrList[i]}</li>`;
    i++
}
