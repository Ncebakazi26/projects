describe('The registration number function(isFromBellville())', function () {
  it('should returns true for the registration number that is from Bellville', function () {
    assert.equal(true, isFromBellville('CY 874324'))
  });
  it('Should return true for the registration number that is from Bellville a', function () {
    assert.equal(true, isFromBellville('CY 872443'))
  });
  it('Should return false because there is no registration number from Bellville', function () {
    assert.equal(false, isFromBellville('CJ 98912'))
  });
});