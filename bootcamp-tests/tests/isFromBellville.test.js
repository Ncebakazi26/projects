describe('The registration number function(isFromBellville())', function () {
  it('should check if the registration number is from Bellville and returns true', function () {
    assert.equal(true, isFromBellville('CY 874324'))
  });
  it('Should check if the registration number is from Bellville and returns true', function () {
    assert.equal(true, isFromBellville('CY 872443'))
  });
  it('Should check if the registration number is from Bellville, if not it must return false', function () {
    assert.equal(false, isFromBellville('CJ 98912'))
  });
});