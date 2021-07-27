// UI
const bg = document.querySelector('.bg');
const loadtext = document.querySelector('.loading-text');

let load = 0;
// 30 millisecond
let int = setInterval(blur, 30);

function blur(){
    load++;

    if (load > 99){
        clearInterval(int);
    }

    // console.log(load);

    loadtext.textContent = `${load}%`;
    loadtext.style.opacity = scale(load,0,100,1,0);
    bg.style.filter = `blur(${scale(load,0,100,70,0)}px)`;

}

//in order to have dynamic point values

const scale = (num,inmin,inmax,outmin,outmax)=>{
    return (num - inmin) * (outmax - outmin) /(inmax - inmin) + outmin;
}

// console.log(scale(1,0,100,1,0))


