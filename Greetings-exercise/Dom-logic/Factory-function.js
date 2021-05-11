function greetings(existingNames) {
    var required = /[A-Za-z]/
    var greetObj = existingNames || {}

    function setName(name) {
        if (name.match(required)) {
            name = name.charAt(0).toUpperCase() + name.slice(1);
            if (greetObj[name] === undefined) {
                greetObj[name] = 0;
            }
        }
    }
    function getNames() {
        return greetObj
    }

    function language(name, language) {
        if (name.match(required)) {
            name = name.charAt(0).toUpperCase() + name.slice(1);
            setName(name)
            if (language === 'English') {
                return "Hello " + name;

            }
            if (language === 'isiXhosa') {
                return "Molo " + name;

            }
            if (language === 'Sepedi') {
                return "Dumela " + name;

            }
        }
        else {
            return "Please enter A-Z/ a-z"
        }
    }

    function counter() {
        var getCounter = Object.keys(greetObj)
        return getCounter.length
    }

    function messages1(name, language) {

        if (name !== '' && language == null ) {
            console.log(name)

            return "Please choose a language first"   
        }
    
    }
    function message2(name, langauge) {

        if (name == '' && langauge) {
            return "Please enter your name first" 
        }
    
    }
    function message3(name, langauge) {
        if (name === '' && langauge == null) {
            console.log('fdfdfd')
        return "Please enter your name and choose language"
        }
    }


return {
    setName,
    language,
    counter,
    messages1,
    getNames,
    message2,
    message3,
}
}


