function greetings() {
var local= {}
var counter=0;
function setLocal(nameS){
local=nameS;
}
function getLocal(){
    return local
}

function getCounter(){
    return counter
}
    function language(name, lang) {
        name=name.toLowerCase()
        let str=name.substr(1, name.length)
        let str1=name.charAt(0).toUpperCase()
        name=str1+str;
        if(local[name]===undefined){
            local[name]=0;
            counter++;
        }
        else{
            local[name]++
        }
        if (lang == "English") {
            return "Hello "+name;
        }
        if (lang == "isiXhosa") {
            return "Molo " + name;
        }
        if (lang == "Sepedi") {
            return "Dumela " + name;
        }
        if(name==undefined){
            counter++;
        }
        
    }
     function setValue(value){
         var langue='';
            if(value==="English"){
                langue='English'
            }
            if(value==="isiXhosa"){
                langue='isiXhosa'
            }
            if(value==="Sepedi"){
                langue='Sepedi'
            }
          return langue;

        }

    return {
        language,
        getCounter,
        setLocal,
        getLocal,
        setValue,
    }
}
