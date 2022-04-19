const reviews = [
    {
        id : 1,
        name : 'pizza',
        job : 'Dominios',
        img : '/images/pizza.png',
        text : 'Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.'
    },
    {
        id : 2,
        name : 'milkshake',
        job : 'Burger Shot',
        img : '/images/milkshake.png',
        text : 'A milkshake is a sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture.'
    },
    {
        id : 3,
        name : 'hotdog',
        job : 'Street Food',
        img : '/images/hotdog.png',
        text : 'A hot dog is a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. The term hot dog can also refer to the sausage itself.'
    },
    {
        id : 4,
        name : 'fries',
        job : 'Mc.Donalds',
        img : '/images/fries.png',
        text : 'French fries, chips, finger chips, french-fried potatoes, or simply fries, are batonnet or allumette-cut deep-fried potatoes, possibly originating from France.'
    }
]

const img = document.getElementById("imagess")
const auth  = document.getElementById("auth")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prev = document.querySelector(".prev")  
const next = document.querySelector(".next")
const random = document.querySelector(".random")

let currentitem = 0;

// load inital item

window.addEventListener('DOMContentLoaded',function(){
    showitem()
})

// show person based on items


function showitem(){
    const item  = reviews[currentitem]
    img.src = item.img
    auth.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text    
}


// next item 


next.addEventListener('click',  function(){
    currentitem++;
    if(currentitem > reviews.length-1){
        currentitem = 0;
    }
    showitem()
})


// prev item

prev.addEventListener('click' , function(){
    currentitem--
    if(currentitem < 0){
        currentitem  = reviews.length-1
    }
    showitem()
})


// random items


random.addEventListener('click' , function(){
    currentitem = Math.floor(Math.random() * reviews.length)
    console.log(currentitem)
    showitem()
})