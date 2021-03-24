function countAllFromTown(regNumber,StartStr){
    //console.log(StartStr)
      var registration = regNumber.split(",");
     // var count = 0;
      var town = [];
      for(var i=0;i<registration.length;i++){
      if (registration[i].trim().startsWith(StartStr)){
        town.push(registration[i]);
        //count ++
    }
      }
      return town.length;
    }