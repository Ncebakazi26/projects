describe('The total phone bill function', function () {
    it('should add the cost of sms and calls to see the total bill for the data provided', function () {
      assert.equal('R4.05', totalPhoneBill('sms','sms','call'))
    });
    it('Should add the cost of sms and calls to see the total bill for the data provid' , function () {
      assert.equal('R6.15', totalPhoneBill('sms','calls','call'))
    });
    it('Should add the cost of sms and calls to see the total bill for the data provid ', function () {
      assert.equal('R1.95', totalPhoneBill('sms','sms','sms'))
    });
  });