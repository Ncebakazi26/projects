function greetings(existingNames) {

    var greetObj = existingNames || {}

    function setName(name) {
        if (greetObj[name] === undefined) {
            greetObj[name] = 0;
        }
    }
    function getNames() {
        return greetObj
    }

    function language(name, language) {
        //var str= name.toLowerCase();
        // var str1=str.toUpperCase(charAt(0));
        //name=str1
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

    function counter() {
        var getCounter = Object.keys(greetObj)
        return getCounter.length
    }

    function errorMessages(placeholder, radio) {
        if (placeholder === '') {
            return "Please enter your name"
        }
        else if (placeholder === '' && radio === undefined) {
            return "Please enter your name and choose language"
        }
        else if (radio === undefined) {
            return "Please choose a language first"
        }
       

    }

    return {
        setName,
        language,
        counter,
        errorMessages,
        getNames,
    }
}

