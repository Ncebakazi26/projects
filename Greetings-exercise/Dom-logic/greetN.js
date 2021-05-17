var nameElem = document.querySelector(".Pname")
var englishElem = document.querySelector(".English")
var isiXhosaElem = document.querySelector(".isiXhosa")
var sepediElem = document.querySelector(".Sepedi")
var btnElem = document.querySelector(".greet")
var buttonElem = document.querySelector("#btn")
var formElem = document.querySelector("#form")
var displayCount = document.querySelector(".counter")
var displayName = document.querySelector(".error-message")
var greetName = document.querySelector(".greetName")

var regex = /[0-9]/;

//retrive names from local storaqge
//if(greetInstance.getNames()!==undefined){

var nameList;
//}

if (localStorage['nameGreeted']) {
    nameList = JSON.parse(localStorage.getItem('nameGreeted'))
}

var greetInstance = greetings(nameList)

displayCount.innerHTML = greetInstance.counter()

function textclear() {
    formElem.value = ""
    document.getElementById('English').checked = false
    document.getElementById('isiXhosa').checked =false
    document.getElementById('Sepedi').checked =false

}
function submitform() {
    var radio = document.querySelector(".lang:checked")
    var nameTxt = formElem.value

    if (radio) {
        var language = radio.value

    }
        if (nameTxt && language && !name.match(regex)) {
            greetInstance.setName(nameTxt)
            greetName.innerHTML = greetInstance.language(nameTxt, language)
            //set names into localstorage
            localStorage.setItem('nameGreeted', JSON.stringify(greetInstance.getNames()))
            displayCount.innerHTML = greetInstance.counter()
            displayName.innerHTML = ""
           
            textclear()   
        } 
        
    if(!radio && nameTxt == ""){
        setTimeout(function(){
            greetName.innerHTML = ''
            displayName.innerHTML = "Please enter your name and choose language";
            displayName.classList.add('Error')
        },0)
        setTimeout(function(){
            displayName.innerHTML = "";
            textclear()
        },3000)
    }
    if(!radio && nameTxt){
        setTimeout(function(){
            greetName.innerHTML = ''
            displayName.innerHTML = "Please choose a language"; 
            displayName.classList.add('Error')
        },0)
        setTimeout(function(){
            displayName.innerHTML = "";             
        },3000)
        textclear()
    }
    if(nameTxt == "" ){
        setTimeout(function(){
            greetName.innerHTML = ''
            displayName.innerHTML = "Please enter your name first";
            displayName.classList.add('Error')
        },0)
        setTimeout(function(){
            displayName.innerHTML = "";
            
        },3000)
        textclear()
    }
}

btnElem.addEventListener('click', submitform)
buttonElem.addEventListener('click', function () {
    localStorage.clear()
    location.reload()
});