const elements = document.querySelectionAll('*')

const div = document.querySelector('div');
const main = document.querySelector('main');
const section = document.querySelector('section');

div.addEventListener('click',
    () => alert(`Bubbling ${div.tagName}`), false
);

main.addEventListener('click',
    (e) => {alert(`Bubbling ${main.tagName}`); e.stopPropagation();}, false
);

section.addEventListener('click',
    () => alert(`Bubbling ${section.tagName}`), false
);


const geo = navigator.geolocation.getCurrentPosition(position=>
    console.log(position),
    error=> console.error(error)
);