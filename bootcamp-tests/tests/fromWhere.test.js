describe('The town that a registration number belongs to function(fromWhere())', function () {
    it('should return Bellville for the registration number that is from Bellville', function () {
      assert.equal('Bellville', fromWhere('CY 523519'))
    });
    it('Should returns Cape Town for the registration number that is from Cape Town' , function () {
      assert.equal('Cape Town', fromWhere('CA 182736'))
    });
    it('Should return Paarl for the registration number that is from Paarl' , function () {
        assert.equal('Paarl', fromWhere('CJ 182736'))
      });
  });