function totalPhoneBill(callsAndSms){
    //console.log(callsAndSms);
  var string=callsAndSms.split(", ")
  var total=0;
  //var phonebill=[];
    for(var i=0;i<string.length;i++){
      if(string[i] ==="call"){
      total += 2.75;
      }
       if(string[i] ==="sms"){
      total += 0.65;
      }
  }
  return 'R'+total.toFixed(2);
  }