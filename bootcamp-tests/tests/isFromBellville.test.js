describe('The registration function', function () {
  it('should check if the registration number is from Bellville', function () {
    assert.equal(true, isFromBellville('CY 874324'))
  });
  it('Should check if the registration number is from Bellville', function () {
    assert.equal(true, isFromBellville('CY 872443'))
  });
  it('Should check if the registration number is from Bellville', function () {
    assert.equal(false, isFromBellville('CJ 98912'))
  });
});