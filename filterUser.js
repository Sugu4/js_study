
const container = document.querySelector('.container')
const filter = document
let searchTerm = '';
let items = [];


getData();
async function getData(){
    const response = await fetch("https://randomuser.me/api/?results=50");
    const {results} = await response.json();


results.forEach(user=> {
    const h2 = document.createElement("h2");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    h2.innerText = user.name.last + "," + user.name.first;
    h4.innerText = user.location.city + "," + user.location.container;
    img.src = user.picture.large;
    container.appendChild(h2);
    container.appendChild(h4);
    container.appendChild(img);
});

}

filter.addEventListener('keydown', (e)=> {
    searchTerm += e.key;
    items.forEach(item=> console.log(item.includes(searchTerm)));
});

filter.addEventListener('blur', (e)=> {searchTerm = '', console.log(e);

});