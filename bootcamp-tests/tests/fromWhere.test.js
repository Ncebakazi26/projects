describe('The town that a registration number belongs to function', function () {
    it('should check which town is the registration number from and return the towns name', function () {
      assert.equal('Bellville', fromWhere('CY 523519'))
    });
    it('Should check which town is the registration number from and return the towns name' , function () {
      assert.equal('Cape Town', fromWhere('CA 182736'))
    });
    it('Should check which town is the registration number from and return the towns name' , function () {
        assert.equal('Paarl', fromWhere('CJ 182736'))
      });
  });