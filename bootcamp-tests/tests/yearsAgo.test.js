describe('The years ago from the current year function(yearsAgo())', function () {
    it('should check how many years ago is 1995 from the current year and return 26', function () {
      assert.equal('26', yearsAgo('1995'))
    });
    it('Should check how many years ago is 1989 from the current year and return 32' , function () {
      assert.equal('32', yearsAgo('1989'))
    });
    it('Should check how many years ago is 2022 from the current year and return -1 because the current year is 2021 ', function () {
      assert.equal('-1', yearsAgo('2022'))
    });
  });