
function calculateBill(){
    var billTotal = 0;
function calculateCallandSms(stringPassed){
    var billString = stringPassed.split(",");
    var billItems = billString
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
        function getTotalcalcalculated(){
            return billTotal;
        }
    }
}
return{
    calculateCallandSms,
    getTotalcalcalculated,
}
}