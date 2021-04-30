var nameElem = document.querySelector(".Pname")
var englishElem = document.querySelector(".English")
var isiXhosaElem = document.querySelector(".isiXhosa")
var sepediElem = document.querySelector(".Sepedi")
var btnElem = document.querySelector(".greet")
var buttonElem = document.querySelector("#btn")
var formElem = document.querySelector("#form")
var displayCount = document.querySelector(".counter")
var displayName = document.querySelector(".Name")

var localDom = {}
if (localStorage['info']) {
    localDom = JSON.parse(localStorage['info'])
}
var greetInst = greetings()
greetInst.setLocal(localDom)
function getName() {
    var name = formElem.value;
    return {
        name
    }
}
function boxcleared() {
    formElem.value = "";
}
function setCounter() {
    displayCount.innerHTML = Object.keys(greetInst.getLocal()).length
}
setCounter();
function submitForm() {
    var radio = document.querySelector('input[name="language"]:checked');
    var nameAndlang = getName().name;
    if (nameAndlang) {
        if (radio !== null) {
            var langDOM = greetInst.setValue(radio.value)
            displayName.innerHTML = greetInst.language(nameAndlang, langDOM);
            localStorage.setItem('info', JSON.stringify(greetInst.getLocal()));
            setCounter();
            boxcleared();
        } else {
            displayName.innerHTML ='Choose language of your choice first'
        }
        } else {
            displayName.innerHTML = 'Type your name to continue';
        }
        return false;

}


btnElem.addEventListener('click', submitForm)
buttonElem.addEventListener('click', function run() {
    localStorage.clear()
    location.reload()
});