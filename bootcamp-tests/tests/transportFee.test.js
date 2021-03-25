describe('The price of the shift function', function () {
    it('should check which shift is passed and give a correct price for it', function () {
      assert.equal('R20', transportFee('morning shift'))
    });
    it('Should check which shift is passed and give a correct price for it' , function () {
      assert.equal('R10', transportFee('afternoon shift'))
    });
    it('Should check which shift is passed and give a correct price for it ', function () {
      assert.equal('free', transportFee('night shift'))
    });
  });