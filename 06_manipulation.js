// 06_manipulation.js

const div = document.getElementsByTagName('div');
const main = document.getElementById('main');
const container = document.getElementsByClassName('container');
const divs = document.querySelectorAll('.container');
const first = document.querySelector('div');

div[0].style.backgroundColor = "yellow";
main.style.width = "425px";
container[0].innerHTML = 'Hallo';
first.addEventListener('mouseover', (e) => {
    console.log(e);

    if (first.style.backgroundColor == "red") {
        first.style.backgroundColor = "#39FF14";
    }else{ 
        first.style.backgroundColor = 'red'}
    });

const inputs = document.querySelectior('from');

inputs.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
})

//console.log(first);