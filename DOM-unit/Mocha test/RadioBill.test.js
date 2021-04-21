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
    it("should return orange if the total is 5 and over", function () {
        let textBill = RadioBill();
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
    
    

        assert.equal(5.5, textBill.getcallTotal1());
        assert.equal(1.5, textBill.getsmsTotal1());
        assert.equal(7, textBill.getTotal1());
        assert.equal("Orange", textBill.OrangeAndRed1());
    });
    it("should return red if the total is 10 and over", function () {
        let textBill = RadioBill();
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("sms")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        textBill.smsAndcalls1("call")
        
    
    

        assert.equal(8.25, textBill.getcallTotal1());
        assert.equal(3, textBill.getsmsTotal1());
        assert.equal(11.25, textBill.getTotal1());
        assert.equal("Red", textBill.OrangeAndRed1());
    });
});