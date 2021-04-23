describe("The radio bill factory function", function () {
    it("should be able to add call cost and return total ", function () {
        let textBill = RadioBill();
        textBill.smsAndcalls1("call")
        assert.equal(textBill.getcallTotal1(), 2.75);


    });
    it("should be able to add sms cost and return total ", function () {
        let textBill = RadioBill();
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        assert.equal(textBill.getsmsTotal1(), 2.25);
    });
    it("should be able to add sms's and calls cost and return total ", function () {
        let textBill = RadioBill();
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")

        assert.equal(5.5, textBill.getcallTotal1());
        assert.equal(1.5, textBill.getsmsTotal1());
        assert.equal(7, textBill.getTotal1());
    });
    it("should return class name  warning if the total is between 30 and 39", function () {
        let textBill = RadioBill();
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
    
    

        assert.equal(30.25, textBill.getcallTotal1());
        assert.equal(4.5, textBill.getsmsTotal1());
        assert.equal(34.75, textBill.getTotal1());
        assert.equal("warning", textBill.OrangeAndRed1());
    });
    it("should return danger if the total is 50 and over", function () {
        let textBill = RadioBill();
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        
    
    

        assert.equal(44, textBill.getcallTotal1());
        assert.equal(12, textBill.getsmsTotal1());
        assert.equal(56, textBill.getTotal1());
        assert.equal("danger", textBill.OrangeAndRed1());
    });
});