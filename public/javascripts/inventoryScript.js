let aisleArray = ["Aisle 1 - Organics", "Aisle 2 - Cleaning Products", "Aisle 3 - Pet Food",
            "Aisle 4 - Bread", "Aisle 5 - Meat", "Aisle 6 - Frozen Food", "Aisle 7 - Miscellaneous",
            "Aisle 8 - Soda/Energy Drink"];

let aisleListContainer = document.querySelector("ul.list-group");

aisleArray.forEach(function(item, index){
    var aisleELement = document.createElement('li');
    aisleELement.classList.add("list-group-item");
    aisleELement.classList.add("aisles");
    var aisleName = document.createElement('h3');
    aisleName.innerHTML = "▶ " + item;
    aisleELement.appendChild(aisleName);
    aisleListContainer.appendChild(aisleELement);
});

