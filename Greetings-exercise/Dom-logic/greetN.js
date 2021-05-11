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

var nameList;
//}
if (localStorage['nameGreeted']) {
    nameList = JSON.parse(localStorage.getItem('nameGreeted'))
}

var greetInstance = greetings(nameList)

displayCount.innerHTML = greetInstance.counter()

function textclear() {
    formElem.value = ""
}
function submitform() {
    var radio = document.querySelector(".lang:checked")
    var nameTxt = formElem.value

    if (radio) {
        var language = radio.value

    }
        if (nameTxt && language) {
            greetInstance.setName(nameTxt)
            displayName.innerHTML = greetInstance.language(nameTxt, language)
            //set names into localstorage
            localStorage.setItem('nameGreeted', JSON.stringify(greetInstance.getNames()))
            displayCount.innerHTML = greetInstance.counter()
            textclear()
        }   
     else    if( formElem.value === '' &&  language== null){
            displayName.innerHTML= greetInstance.message3(formElem.value,radio.value)
        }     
  else   if( !formElem.value && radio.value == null){
          displayName.innerHTML= greetInstance.messages1(formElem.value,language)
     }

   else   if( formElem.value === '' && radio.value ){
            displayName.innerHTML= greetInstance.message2(formElem.value,language)  
     }
   
}
    //else  {
    //   displayName.innerHTML = "Please choose a language"
   // }
    

btnElem.addEventListener('click', submitform)
buttonElem.addEventListener('click', function () {
    localStorage.clear()
    location.reload()
});
