function countAllPaarl(regNum){
    var registration = regNum.split(", ")
      var number = [];
      var count = 0;
      for(var i=0;i<registration.length;i++){
      if(registration[i].startsWith("CJ")){
        number.push(registration[i])
     //  count ++;  
      }
    }
      return number.length;
    }