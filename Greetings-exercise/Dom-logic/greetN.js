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

//var required = /[A-Za-z]/

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
        if (nameTxt && language) {
            greetInstance.setName(nameTxt)
            greetName.innerHTML = greetInstance.language(nameTxt, language)
            //set names into localstorage
            localStorage.setItem('nameGreeted', JSON.stringify(greetInstance.getNames()))
            displayCount.innerHTML = greetInstance.counter()
            textclear()

            // if(nameTxt != language && !nameTxt.match(required)){
            //     setTimeout(function(){
            //    displayName.classList.add('Error')
            //  },0)
            // }
        }   
    if(!radio && nameTxt == ""){
        displayName.innerHTML = "enter name and choose language";
        return;
    }
    if(!radio){
        displayName.innerHTML = "choose language"; 
        return;
    }
    if(nameTxt == "" )
    displayName.innerHTML = "enter name first";
    return;

}
  
    
    

btnElem.addEventListener('click', submitform)
buttonElem.addEventListener('click', function () {
    localStorage.clear()
    location.reload()
});
