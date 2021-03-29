function countAllPaarl(regNum){
    var registration = regNum.split(",")
      var paarlRegList = [];
      for(var i=0;i<registration.length;i++){
        var reg = registration[i].trim()
      if(reg.startsWith("CJ")){
        paarlRegList.push(reg);
      }
    }
    return paarlRegList.length;
    }
    
    // console.log(countAllPaarl('CA 182736','CY 523519'));
    // console.log(countAllPaarl('CA 182736','CY 523519','CJ 812328'));