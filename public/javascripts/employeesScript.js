let employeeArray = [
    {
        "Name" : "Adam",
        "Age" : 30,
        "Year Joined": 2018,
        "Bio" : "I love working at NJ Grocery Store. I joined my wonderful team four years ago and I've enjoyed every second of it!!!",
        "img" : "./images/adam.jpg"
    },
    {
        "Name" : "Pat",
        "Age" : 21,
        "Year Joined": 2017,
        "Bio" : "I love playing soccer and I like working hard for the team.",
        "img" : "./images/pat.jpg"
    },
    {
        "Name" : "Brian",
        "Age" : 43,
        "Year Joined": 2011,
        "Bio" : "I have been working here for almost a decade and I know the ins and outs of this profession",
        "img" : "./images/brian.jpg"
    },
    {
        "Name" : "Hunter",
        "Age" : 35,
        "Year Joined": 2015,
        "Bio" : "I like dogs but I hate cats. Contrary to my name, I do not hunt.",
        "img" : "./images/hunter.jpg"
    },
    {
        "Name" : "Amy",
        "Age" : 40,
        "Year Joined": 2001,
        "Bio" : "I've spent half of my life working in this store",
        "img" : "./images/amy.jpeg"
    },
    {
        "Name" : "Patricia",
        "Age" : 28,
        "Year Joined": 2017,
        "Bio" : "I love working at NJ Grocery Store. I joined my wonderful team four years ago and I've enjoyed every second of it!!!",
        "img" : "./images/patricia.jpeg"
    },
    {
        "Name" : "Mike",
        "Age" : 30,
        "Year Joined": 2014,
        "Bio" : "I have a motorcycle that I ride to work everyday",
        "img" : "./images/mike.jpeg"
    },
    {
        "Name" : "Kaylah",
        "Age" : 20,
        "Year Joined": 2018,
        "Bio" : "I am the youngest worker in this store",
        "img" : "./images/kaylah.jpeg"
    },
    {
        "Name" : "Bree",
        "Age" : 27,
        "Year Joined": 2019,
        "Bio" : "I'm quitting this job soon. Bye!",
        "img" : "./images/bree.png"
    },
]

let aisleListContainer = document.querySelector("div.container");
employeeArray.forEach(function(item, index) {
    let containerDiv = document.createElement('div');
    containerDiv.classList.add("card");
    containerDiv.style.width = "18rem";
    aisleListContainer.appendChild(containerDiv);
    let img = document.createElement('img');
    img.classList.add("card-img-top");
    img.setAttribute("src", item.img);
    img.setAttribute("alt", "Card image cap");
    containerDiv.appendChild(img);
    let bodyDiv = document.createElement('div');
    bodyDiv.classList.add("card-body");
    containerDiv.appendChild(bodyDiv);
    let headerDiv = document.createElement('h5');
    headerDiv.classList.add("card-title");
    headerDiv.innerHTML = item.Name;
    bodyDiv.appendChild(headerDiv);
    let descriptionDiv = document.createElement('p');
    descriptionDiv.classList.add("card-text");
    descriptionDiv.innerHTML=item.Bio;
    bodyDiv.appendChild(descriptionDiv);
    let link = document.createElement('a');
    link.className = "btn btn-primary";
    link.setAttribute("href", "#");
    link.innerHTML = item.Name + "'s Profile";  
    bodyDiv.appendChild(link);  
});

