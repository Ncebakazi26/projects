describe('The CalculateBill factory function', function () {
  let calculateBill= calculateBillEvent()
    it('should add the cost of calls', function () {
      calculateBill.makeCall()
      calculateBill.makeCall()
      assert.equal(calculateBill.total(),5.5)
    });
    it('Should greet Ncesh correctly', function () {
      assert.equal('Hello, Ncesh', greet('Ncesh'))
    });
  });