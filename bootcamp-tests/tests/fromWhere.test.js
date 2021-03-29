describe('The town that a registration number belongs to function(fromWhere())', function () {
    it('should check if the  registration number is from Bellville and return Bellville', function () {
      assert.equal('Bellville', fromWhere('CY 523519'))
    });
    it('Should check if the registration number is from Cape Town and returns Cape Town' , function () {
      assert.equal('Cape Town', fromWhere('CA 182736'))
    });
    it('Should check if the registration number is from Paarl and returns Paarl' , function () {
        assert.equal('Paarl', fromWhere('CJ 182736'))
      });
  });