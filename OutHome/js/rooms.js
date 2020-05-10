
// Chamada da API
const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const cardsContainer = document.querySelector("#cards");
let data = [];

async function fetchCards() {
	const response = await fetch(apiUrl)
	return await response.json()
};

function renderCards(cards) {
	cardsContainer.innerHTML = "";
	cards.map(renderCard);
};

function renderCard(card) {
	const div = document.createElement("div");

	div.className = "card__item";

	div.innerHTML = `
	<img 
		src="${card.photo}" 
		alt="${card.name}" 
		class="card__item--image"
	/>

	<div class="card__description">
		<div class="card__description--type">
		${card.property_type}
		</div>

	   <h1 class="card__description--name">${card.name}</h1>
	   
	   <h3 class="card__description--price">R$ ${card.price},00</h3>
   </div>
   `;
	cardsContainer.appendChild(div);

};

async function main() {
	data = await fetchCards();
	if (data) {
		renderCards(data);
	}
};

main();












