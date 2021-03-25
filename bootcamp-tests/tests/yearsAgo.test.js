describe('The years ago from the current year function', function () {
    it('should check how many years ago the passed year is from the current year', function () {
      assert.equal('26', yearsAgo('1995'))
    });
    it('Should check how many years ago the passed year is from the current year' , function () {
      assert.equal('32', yearsAgo('1989'))
    });
    it('Should check how many years ago the passed year is from the current year ', function () {
      assert.equal('-1', yearsAgo('2022'))
    });
  });