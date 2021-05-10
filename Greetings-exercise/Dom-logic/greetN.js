var nameElem = document.querySelector(".Pname")
var englishElem = document.querySelector(".English")
var isiXhosaElem = document.querySelector(".isiXhosa")
var sepediElem = document.querySelector(".Sepedi")
var btnElem = document.querySelector(".greet")
var buttonElem = document.querySelector("#btn")
var formElem = document.querySelector("#form")
var displayCount = document.querySelector(".counter")
var displayName = document.querySelector(".Name")

//retrive names from local storaqge
//if(greetInstance.getNames()!==undefined){


//}
var greetInstance = greetings()
localStorage['info'] = greetInstance.counter()
if (localStorage['info']) {
    counter = localStorage['info']
    displayCount.innerHTML = counter
}
function textclear() {
    formElem.value = ""
}
function submitform() {
    var nameTxt = formElem.value

    var radio = document.querySelector("input[name='language']:checked")
    alert(radio)
    if (radio) {
        var language = radio.value
        var nameTxt = formElem.value
        if (nameTxt && language) {
            greetInstance.setName(nameTxt)
            displayName.innerHTML = greetInstance.language(nameTxt, language)
            //set names into localstorage
            localStorage.setItem('nameGreeted', JSON.stringify(greetInstance.getNames()))
            var nameList = JSON.parse(localStorage.getItem('nameGreeted'))
            var getCounter = Object.keys(nameList)
            displayCount.innerHTML = getCounter.length
            textclear()
        }
        else {
            displayName.innerHTML = greetInstance.errorMessages(nameTxt, language)
        }

    }
    else {
        displayName.innerHTML = "Please enter name and choose a l "
    }


}
btnElem.addEventListener('click', submitform)
buttonElem.addEventListener('click', function () {
    localStorage.clear()
    location.reload()
});
