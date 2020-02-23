let aisleArray = ["Aisle 1 - Organics", "Aisle 2 - Cleaning Products", "Aisle 3 - Pet Food",
            "Aisle 4 - Bread", "Aisle 5 - Meat", "Aisle 6 - Frozen Food", "Aisle 7 - Miscellaneous",
            "Aisle 8 - Soda/Energy Drink"];

let aisleListContainer = document.querySelector("ul.list-group");

let jsonData = [
    {
        "Aisle": "Aisle  1 - Organics",
        "Amount": 1,
        "AmountSold": 12,
        "Manufacturer": "Mickeys and Co.",
        "Name": "Cheese",
        "Row": 9,
        "Shelf": 3,
        "Unit": "Number",
        "Threshold" : "3"
    },
    {
        "Aisle": "Aisle  1 - Organics",
        "Amount": 20,
        "AmountSold": 2,
        "Manufacturer": "Charle's Farm",
        "Name": "Potatoes",
        "Row": 3,
        "Shelf": 5,
        "Unit": "lb",
        "Threshold" : "4"
    },
    {
        "Aisle": "Aisle 1  - Organics",
        "Amount": 25,
        "AmountSold": 4,
        "Manufacturer": "Henry and Sam",
        "Name": "Tomatoes",
        "Row": 4,
        "Shelf": 7,
        "Unit": "lb",
        "Threshold" : "10"
    },
    {
        "Aisle": "Aisle 1 - Organics",
        "Amount": 50,
        "AmountSold": 6,
        "Manufacturer": "Trader Joe's",
        "Name": "Broccoli",
        "Row": 2,
        "Shelf": 6,
        "Unit": "Number",
        "Threshold" : "8"
    }
]

let temp = [];

aisleArray.forEach(function(item, index){
    let aisleELement = document.createElement('li');
    aisleELement.classList.add("list-group-item");
    aisleELement.classList.add("aisles");
    let aisleName = document.createElement('h3');
    aisleName.innerHTML = "▶ " + item;
    aisleELement.appendChild(aisleName);
    aisleListContainer.appendChild(aisleELement);
    aisleELement.addEventListener("click", clickAisle);
});


function addColumnDiv(columnName, parentElement, columnNum, rowNum) {
    let column = document.createElement('div');
    column.innerHTML=columnName;
    column.style.gridRow = rowNum + " / span 1";
    column.style.gridColumn = columnNum + " / span 1";
    parentElement.appendChild(column);
    return column;
}

function clickAisle(event) {
    event.currentTarget.classList.toggle("expanded");
    if(event.currentTarget.classList.contains("expanded")) {
        showAisleItems(event);
    } else {
        hideAisleItems(event);
    }
    event.currentTarget.classList.add("data-downloaded");

}

function hideAisleItems(event) {
    event.currentTarget.nextElementSibling.style.display = "none";
    event.currentTarget.querySelector("h3").innerHTML = "▶" + event.currentTarget.querySelector("h3").innerHTML.substring(1);
}


function showAisleItems(event) {
    if(event.currentTarget.classList.contains("data-downloaded")) {
        event.currentTarget.nextElementSibling.style.display = "block";
        event.currentTarget.querySelector("h3").innerHTML = "▼" + event.currentTarget.querySelector("h3").innerHTML.substring(1);
        return;
    }
    let inventoryList = document.createElement('li');
    inventoryList.classList.add("list-group-item");
    if(jsonData.length == 0) {
        let noItemMessage = document.createElement('div');
        noItemMessage.innerHTML = "No items are listed in this aisle/section";
        inventoryList.appendChild(noItemMessage);
    } else {

        let columns = document.createElement('div');
        inventoryList.appendChild(columns);
        columns.style.display = "grid";
        columns.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr";
        
        addColumnDiv("Name", columns, 1, 1).style.backgroundColor = "gray";
        addColumnDiv("Manufacturer", columns, 2, 1).style.backgroundColor = "gray";
        addColumnDiv("Shelf", columns, 3, 1).style.backgroundColor = "gray";
        addColumnDiv("Row", columns, 4, 1).style.backgroundColor = "gray";
        addColumnDiv("Unit", columns, 5, 1).style.backgroundColor = "gray";
        addColumnDiv("Amount", columns, 6, 1).style.backgroundColor = "gray";
        addColumnDiv("Amount Sold", columns, 7, 1).style.backgroundColor = "gray";

        

        jsonData.forEach(function(item, index) {
            if(item.Threshold > item.Amount) {
                addColumnDiv(item.Name, columns, 1, index + 2).style.color="red";
                addColumnDiv(item.Manufacturer, columns, 2, index + 2).style.color="red";
                addColumnDiv(item.Shelf, columns, 3, index + 2).style.color="red";
                addColumnDiv(item.Row, columns, 4, index + 2).style.color="red";
                addColumnDiv(item.Unit, columns, 5, index + 2).style.color="red";
                addColumnDiv(item.Amount, columns, 6, index + 2).style.color="red";
                addColumnDiv(item.AmountSold, columns, 7, index + 2).style.color="red";
            } else {
                addColumnDiv(item.Name, columns, 1, index + 2);
                addColumnDiv(item.Manufacturer, columns, 2, index + 2);
                addColumnDiv(item.Shelf, columns, 3, index + 2);
                addColumnDiv(item.Row, columns, 4, index + 2);
                addColumnDiv(item.Unit, columns, 5, index + 2);
                addColumnDiv(item.Amount, columns, 6, index + 2);
                addColumnDiv(item.AmountSold, columns, 7, index + 2);
            }
            
        });
        
        let items = document.createElement('div');
        columns.appendChild(items);
    }
    event.currentTarget.after(inventoryList);
    event.currentTarget.querySelector("h3").innerHTML = "▼" + event.currentTarget.querySelector("h3").innerHTML.substring(1);

}