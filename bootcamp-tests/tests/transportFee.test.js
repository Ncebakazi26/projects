describe('The price of the shift function(transportFee())', function () {
    it('should should return R20 if its Morning shift', function () {
      assert.equal('R20', transportFee('morning shift'))
    });
    it('Shouldreturn R10 if its Afternoon shift  ' , function () {
      assert.equal('R10', transportFee('afternoon shift'))
    });
    it('Shouldreturn free because there is no price for night shift ', function () {
      assert.equal('free', transportFee('night shift'))
    });
  });