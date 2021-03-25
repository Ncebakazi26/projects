describe('The greet function', function () {
  it('should greet Bob correctly', function () {
    assert.equal('Hello, Bob', greet('Bob'))
  });
  it('Should greet Ncesh correctly', function () {
    assert.equal('Hello, Ncesh', greet('Ncesh'))
  });
});
