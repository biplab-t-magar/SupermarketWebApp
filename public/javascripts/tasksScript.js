employee_list = [
	{
		"Name": "Skim Milk",
		"Manufacturer": "SomeManufacturer",
		"Row": 3,
		"Shelf": 3,
		"Unit": "Containers",
		"Stock Remaining": 19
	},

	{
		"Name": "inorganic Banana",
		"Manufacturer": "Some Farmer",
		"Row": 2,
		"Shelf": 6,
		"Unit": "Pounds",
		"Stock Remaining": 35
	}
];

function add_card(name){
	let employees_card_views = document.getElementsByClassName("Employees");
	let card = document.createElement("div");
	card.classList.add("card");
	card.setAttribute("style","width: 18rem;")
	let card_body = document.createElement("div");
	card_body.className="card-body";
	let h5 = document.createElement("h5");
	h5.className= "card-title";
	h5.appendChild(document.createTextNode(name));
	card_body.appendChild(h5);
	let p = document.createElement("p");
	p.className="card-text";
	p.textContent+=("Some quick example text to build on the card title and make up the bulk of the card's content.");
	card_body.appendChild(p);
	let a_href=document.createElement("a");
	a_href.className="btn btn-primary";
	a_href.textContent+=("Assign Task");
	a_href.setAttribute("href","#");
	card_body.appendChild(a_href);
	card.appendChild(card_body)
	document.querySelector(".Employees").appendChild(card);
}

add_card("A name");
add_card("Naming king");
add_card("A cow");
add_card("A cow");
add_card("A cow");
add_card("A cow");
