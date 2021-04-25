'use strict'







let imgPartt = [
    
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chari.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep(1).jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'tauntaun.jpg',
    'unicorn.jpg',
    'wine-glass.jpg',
];








const partimg = document.getElementById('partimg');
const liftIMG = document.getElementById('liftIMG');
const rigtIMG = document.getElementById('rigtIMG');
const midelIMG = document.getElementById('midelIMG');
let number = 0;

function photo(name) {
    this.name = name;
    this.img = './img/${name}.jpg';
 photo.all.push(this);
}


photo.all = [];


for (let i = 0; i < imgPartt.length; i++) {
    new photo(imgPartt[i]);
}






function eventHandalr(e) {
    if ( (e.targrt.Id == 'liftIMeG' || e.taget.id == 'rigtIMG'
        || e.taget.id == 'midelIMG') && number < 25) {
        number++;
        randomPhoto();

    } else {
        console.log('stoped');
    }
}


function randomPhoto() {
    let liftIndex = randomNumber(0, imgPartt.length - 1);
    let rigtIndex ;
    let midelIndex ;

do { 
    rigtIndex = randomNumber(0, imgPartt.length - 1);
    midelIndex = randomNumber(0, imgPartt.length - 1);
} while (liftIndex===rigtIndex)

    liftIMG.src = photo.all[liftIndex].img;
    rigtIMG.sec = photo.all[rigtIndex].img;
    midelIMG.src = photo.all[midelIndex].img;




    console.log(liftIndex);
}




function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

partImg.addEventListener('click', eventHandalr);


randomPhoto();