function totalPhoneBill(billString){
    //console.log(callsAndSms);
  var billList= billString.split(",")
  var total=0;
  //var phonebill=[];
    for(var i=0;i<billList.length;i++){
    var dataType =  billList[i].trim()
      if( dataType==="call"){
      total += 2.75;
      }
       if(dataType ==="sms"){
      total += 0.65;
      }
  }
  return 'R'+total.toFixed(2);
  }