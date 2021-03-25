function transportFee(shifts){
    //r morning= 'R20'
    //r aftternoon ='R10'
    if (shifts.startsWith ('morning')){
      return 'R20'
      }else if(shifts.startsWith('afternoon')){
        return 'R10'
  }
  else{
    return 'free'
  }
  }