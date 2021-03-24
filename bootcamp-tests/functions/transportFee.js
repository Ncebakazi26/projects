function transportFee(shifts){
    //r morning= 'R20'
    //r aftternoon ='R10'
    if (shifts.startsWith ('m')){
      return 'R20'
      }else if(shifts.startsWith('a')){
        return 'R10'
  }
  else{
    return 'free'
  }
  }