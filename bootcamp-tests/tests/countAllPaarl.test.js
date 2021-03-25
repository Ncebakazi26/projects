describe('The registration from Paarl function', function () {
    it('should count all registration numbers that are from Paarl', function () {
      assert.equal('1', countAllPaarl('CA 182736','CY 523519','CJ 812328'))
    });
    it('Should count all registration numbers that are from Paarl ' , function () {
      assert.equal('0', countAllPaarl('CA 182736','CY 523519'))
    });
    it('Should count all registration numbers that are from Paarl ' , function () {
        assert.equal('2', countAllPaarl('CJ 182736','CJ 523519'))
      });
  });