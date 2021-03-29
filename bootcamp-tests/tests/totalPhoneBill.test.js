describe('The total phone bill function(totalPhoneBill())', function () {
    it('should add the cost of two sms and one call and return R4.05 as a total bill ', function () {
      assert.equal('R4.05', totalPhoneBill('sms,sms,call'))
    });
    it('Should add the cost of one sms and two calls and return R6.15 as a total bill ' , function () {
      assert.equal('R6.15', totalPhoneBill('sms,call,call'))
    });
    it('Should add the cost of three sms with no calls and return R1.95 as a total bill', function () {
      assert.equal('R1.95', totalPhoneBill('sms,sms,sms'))
    });
  });