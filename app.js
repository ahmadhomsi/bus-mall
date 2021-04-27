'use strict'







let imgPartt = [

    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'sweep.png',
    'shark.jpg',
    'tauntaun.jpg',
    'unicorn.jpg',
    'wine-glass.jpg',
];








const partimg = document.getElementById('partimg');
const liftIMG = document.getElementById('liftIMG');
const rigtIMG = document.getElementById('rigtIMG');
const midelIMG = document.getElementById('midelIMG');
const viewResult = document.getElementById('viewResult');
const resultcontainer = document.getElementById('data');
let number = 0;


function photo(name) {
    this.name = name;
    this.img = `./img/${name}`;
    this.clicks = 0;
    this.shown = 0;
    photo.all.push(this);
}


photo.all = [];


for (let i = 0; i < imgPartt.length; i++) {
    new photo(imgPartt[i]);
}


function setItems() {
    let photoString = JSON.stringify(photo.all);
    localStorage.setItem('photo', photoString);
}

function getItems() {
    let allItems = localStorage.getItem('photo');
    let objectItems = JSON.parse(allItems);
    if (objectItems !== null) {
        photo.all = objectItems;

    }
}
getItems();
setItems();


partImg.addEventListener('click', eventHandalr);

function eventHandalr(e) {
    if ((e.target.id === 'liftIMG' || e.target.id === 'rigtIMG'
        || e.target.id === 'midelIMG') && number < 25) {
        number++;


        if (e.target.id === 'liftIMG') {
            photo.all[firstImgIndex].clicks++;
        }
        if (e.target.id === 'midelIMG') {
            photo.all[scandeImgIndex].clicks++;
        }

        if (e.target.id === 'rigtIMG') {
            photo.all[therdImgIndex].clicks++;
        }

        randomPhoto();

    } else {
        randerChart();
    }
}
setItems();
let firstImgIndex = 0;
let scandeImgIndex = 0;
let therdImgIndex = 0;


function randomPhoto() {
    let liftIndex = randomNumber(0, imgPartt.length - 1);
    let rigtIndex;
    let midelIndex;

    do {
        rigtIndex = randomNumber(0, imgPartt.length - 1);
        midelIndex = randomNumber(0, imgPartt.length - 1);
    } while (liftIndex === rigtIndex) {
        liftIndex = randomNumber(0, imgPartt.length - 1);
    }
    


    liftIMG.src = photo.all[liftIndex].img;
    rigtIMG.src = photo.all[rigtIndex].img;
    midelIMG.src = photo.all[midelIndex].img;
    firstImgIndex = liftIndex;
    scandeImgIndex = rigtIndex;
    therdImgIndex = midelIndex;


    photo.all[liftIndex].shown++;
    photo.all[rigtIndex].shown++;
    photo.all[midelIndex].shown++;




    console.log(liftIndex);
}



function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}




randomPhoto();
function viewResultfunction() {
    let ulE = document.createElement('ul');
    resultcontainer.appendChild(ulE);

    for (let i = 0; i < photo.all.length; i++) {
        let liE = document.createElement('li');
        ulE.appendChild(liE);
        liE.textContent = `${photo.all[i].name.split('.')[0]}had a ${photo.all[i].clicks} votes,and was seen a ${photo.all[i].shown}.`;

    }
    viewResult.removeEventListener('click', viewResultfunction);
}
viewResult.addEventListener('click', viewResultfunction);

function randerChart() {
    console.log(photo.all);
    let clickNa = [];
    let newName = [];
    let shown = [];

    for (let i = 0; i < photo.all.length; i++) {
        // let clickNa = [];


        clickNa.push(photo.all[i].clicks);
        newName.push(photo.all[i].name);
        shown.push(photo.all[i].shown);


    }
    console.log(clickNa);
    // console.log(newName);
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: newName,
            datasets: [{
                label: '# of Votes',
                data: clickNa,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',

                ],
                borderWidth: 1
            }, {
                label: '# of shown',
                data: shown,
                backgroundColor: [
                    'rgba(200, 99, 100, 0.2)',

                ],
                borderColor: [
                    'rgba(200, 99, 100, 1)',

                ],
                borderWidth: 1
            }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    //myChart.destroy()
}

