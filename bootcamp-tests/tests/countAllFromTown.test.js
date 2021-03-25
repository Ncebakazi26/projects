describe('The registration for specific town function', function () {
    it('should count registration numbers for a specific town in the passed string', function () {
      assert.equal('1', countAllFromTown('CA 182736','CY 523519','CJ 812328'))
    });
    it('Should count all registration numbers  for a specific town in the passed string ' , function () {
      assert.equal('0', countAllFromTown('CA 182736','CY 523519'))
    });
    it('Should count all registration numbers for a specific town in the passed string ' , function () {
        assert.equal('2', countAllFromTown('CJ 182736','CJ 523519'))
      });
  });