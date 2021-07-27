const textel = document.getElementById("text");
const speedel = document.getElementById("speed");
// console.log(speedel);

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

let idx = 1;
let speed = 1000;


function autotext() {
    // console.log('hay');

    textel.innerText = text.slice(0, idx);
    idx++;

    // console.log(text.length)

    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(autotext, speed);
}

autotext();

// Event Listener

speedel.addEventListener('click', () => {
    console.log("hi");
    speed = 1000 / speedel.value;
});