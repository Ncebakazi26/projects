function RadioBill(){
    var callsTotal = 0;
    var smsTotal=0;
    function smsAndcalls1(billString){
        var billTypeEntered = billString.trim();
        if (billTypeEntered === "call"){
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms"){
            smsTotal += 0.75;
        }
    }
        function getcallTotal1(){
            return callsTotal;
        }
        function getsmsTotal1(){
            return smsTotal;
        }
        function getTotal1(){
          return  callsTotal+smsTotal;

        }
    return{
        smsAndcalls1,
        getcallTotal1,
        getsmsTotal1,
        getTotal1,
    }
}