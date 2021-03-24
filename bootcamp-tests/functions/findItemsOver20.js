function findItemsOver20(ObjectL){
    //console.log(ObjectL)
    var listItems=[];
  for(var i=0;i<ObjectL.length;i++){
    if(ObjectL[i].qty>20){
     listItems.push(ObjectL[i]);
    }  
  }
    return listItems;
  }