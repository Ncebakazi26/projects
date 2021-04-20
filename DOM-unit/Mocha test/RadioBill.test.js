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

        assert.equal(2.75, textBill.getcallTotal1());
        assert.equal(1.5, textBill.getsmsTotal1());
        assert.equal(7, textBill.getTotal1());
    });
});