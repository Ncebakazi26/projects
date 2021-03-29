describe('The price of the shift function(transportFee())', function () {
    it('should check if its Morning shift it should return R20', function () {
      assert.equal('R20', transportFee('morning shift'))
    });
    it('Should check  if its Afternoon shift it should return R10' , function () {
      assert.equal('R10', transportFee('afternoon shift'))
    });
    it('Should check  if its Night shift it should return free because the is no price for night shift ', function () {
      assert.equal('free', transportFee('night shift'))
    });
  });