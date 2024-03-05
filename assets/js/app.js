import generateColor from "./generateColor.js";
const options = document.querySelector('.options')
const modal = document.querySelector('.modal')
const target_color = document.querySelector('.target_color')
let chance = 0;
options.addEventListener('click', checkAnswer)

function checkAnswer(e) {
    if (e.target.classList.contains('options_box')) {
        if (e.target.style.backgroundColor != colors[rnd].color) {
            chance++;
            e.target.innerHTML = 'False';
        } else {
            e.target.innerHTML = 'True'
            modal.innerHTML=`<h1>You Win!<h1>`;
            modal.style.display='flex'

        }
        if(chance ==3){
            modal.style.display = 'flex';
        }
    }
}

const colors = []

for (let i = 0; i < 9; i++) {
    colors.push({ color: generateColor(), target: false });
}

const rnd = Math.floor(Math.random() * 9);
colors[rnd].target = true;

showOptions();
showTarget();


function showOptions() {
    colors.map(item => {
        options.innerHTML += `<div class="options_box" style="background-color:${item.color}"></div>`
    })
}

function showTarget() {
    target_color.innerHTML = colors[rnd].color;
}

console.log(colors)