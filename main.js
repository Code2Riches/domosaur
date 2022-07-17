// Warmup Challenges

//1.
let span1 = document.querySelector(".mess-with-me");
span1.style.fontSize = '40px';

//2. // to get a tag with a specific class do 'tagName.className'
let paraMessWithMe = document.querySelector('p.mess-with-me');
paraMessWithMe.style.backgroundColor = 'green';

//3.
let hideDino = document.querySelector('#hide-me');
hideDino.style.display = 'none';

//4.
let triDino = document.querySelector('#triceratops');
triDino.style.width = '324px';


// Event Llistener Challenges
//use whatever variables you have for 1. in warmup challenges (span1)
//1.
span1.addEventListener('click', function(){
    span1.style.color = 'orange';
});

//2.
triDino.addEventListener('click', function(){
    triDino.style.border = '2px solid red'
})

//3.
let feathers = document.querySelector("#feathers");

feathers.addEventListener('click', function(){
    feathers.style.opacity = '0.5';
})

//4.
let toggle = document.querySelector("#toggle")
let row = document.querySelector("#row");

toggle.addEventListener('click', function(){
    if (row.style.backgroundColor === ''){
        row.style.backgroundColor = 'orange';
    } else {row.style.backgroundColor = ''};
});

//5.
let biggify = document.querySelector("#biggify");

biggify.addEventListener('mouseenter', function(){
    biggify.style.width = '200px';
})

// Stretch Goals
//1.
//Switch background color to orange in "toggle event listener"




//2.
biggify.addEventListener('mouseleave', function(){
    biggify.style.width = '162px';
})