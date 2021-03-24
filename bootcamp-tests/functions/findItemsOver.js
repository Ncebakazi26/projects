function findItemsOver(objects,threshold){
    //console.log(threshold)
  var list=[];
    for (var i=0;i<objects.length;i++){
      if(objects[i].qty > threshold){
       // console.log(objects[i].qty)
        list.push(objects[i]);
    }
    }
    return list;
    //list.name + list.qty;
  }