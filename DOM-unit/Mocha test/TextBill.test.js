describe("The text bill factory function", function () {
    it("should be able to add call cost and return total ", function () {
        let textBill = TextBill();
        textBill.smsAndcalls("call")
        textBill.smsAndcalls("call")
        assert.equal(textBill.getcallTotal(), 5.5);


    });
    it("should be able to add sms cost and return total ", function () {
        let textBill = TextBill();
        textBill.smsAndcalls("sms")
        textBill.smsAndcalls("sms")
        assert.equal(textBill.getsmsTotal(), 1.5);
    });
    it("should be able to add sms's and calls cost and return total ", function () {
        let textBill = TextBill();
        textBill.smsAndcalls("sms")
        textBill.smsAndcalls("sms")
        textBill.smsAndcalls("call")
        textBill.smsAndcalls("call")

        assert.equal(5.5, textBill.getcallTotal());
        assert.equal(1.5, textBill.getsmsTotal());
        assert.equal(7, textBill.getTotal());
    });
    it("should return orange if the total is 10 and over", function () {
        let textBill = TextBill();
        textBill.smsAndcalls("sms")
        textBill.smsAndcalls("sms")
        textBill.smsAndcalls("call")
        textBill.smsAndcalls("call")
        textBill.smsAndcalls("sms")
        textBill.smsAndcalls("sms")
        textBill.smsAndcalls("call")
        textBill.smsAndcalls("call")

        assert.equal(11, textBill.getcallTotal());
        assert.equal(3, textBill.getsmsTotal());
        assert.equal(14, textBill.getTotal());
        assert.equal("Orange", textBill.OrangeAndRed());
    });
});