const button = document.getElementById('btn');
const body = document.getElementById('body');
const span = document.getElementById('span');

button.addEventListener('click', () =>{
    body.style.backgroundColor = hexGen();
    span.innerText = hexGen();
});

function hexGen() {
    let result = '#'
    let hex = '0123456789ABCDEF'
    for (let i = 0; i<6; i++) {
        result += hex[Math.floor(Math.random() * 16)];
    }
    return result
};
