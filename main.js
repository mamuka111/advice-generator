// let advice = document.querySelector(".advice1")
let span = document.querySelector(".advice1")
let button = document.querySelector(".button")
let span2 = document.querySelector(".span2")


button.addEventListener("click", () =>{
    axios.get(	"https://api.adviceslip.com/advice")
    .then(function(name){
        console.log(name.data.slip)
span2.innerHTML=name.data.slip.id
span.innerHTML=name.data.slip.advice
    })


})
// რანდომად აგენერინებს რჩევებს

// axios.get("`https://api.adviceslip.com/advice?random=${randomNum}`").