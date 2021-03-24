function yearsAgo(years){
    //console.log(years);
    var year= new Date()
    var currentY = year.getFullYear() - years;
    
   
    return currentY;
  }