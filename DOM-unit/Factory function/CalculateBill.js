
function calculateBill(){
    var billTotal = 0;
function calculateCallandSms(stringPassed){
    var billString = stringPassed.split(",");
    for (var i=0;i<billString.length;i++){
        var billItem = billString[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
       
    }
}
    function getTotalcalcalculated(){
        return billTotal;
    }
    function showColor(){
        if(getTotalcalcalculated()>=20 && getTotalcalcalculated() < 30){
            return "warning";
        }
        if(getTotalcalcalculated()>=30){
            return "danger";
        }

    }
return{
    calculateCallandSms,
    getTotalcalcalculated,
    showColor,
}
}