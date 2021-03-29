describe('The registration number/s from Paarl function(countAllPaarl())', function () {
    it('should count all registration numbers that are from Paarl and return 1 as number of registration that belongs to Paarl ', function () {
      assert.equal(1, countAllPaarl('CJ 812328, CA 182736, CY 523519'))
    });
    it('Should count all registration numbers that are from Paarl and return 0 as a number becauese there are no registration number from Paarl ' , function () {
      assert.equal(0, countAllPaarl('CA 182736,CY 523519'))
    });
    it('Should count all registration numbers that are from Paarl and return 2 as a number of registration that belongs to Paarl' , function () {
        assert.equal(2, countAllPaarl('CJ 182736, CJ 523519'))
      });
  });