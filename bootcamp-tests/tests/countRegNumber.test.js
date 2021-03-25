describe('The counting registration number function', function () {
    it('should count how many registration numbers are in the string', function () {
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'))
    });
    it('Should count how many registration numbers are in the string', function () {
        assert.equal(2, countRegNumber('CA 182736,CY 523519'))
    });
    it('Should count how many registration numbers are in the string', function () {
        assert.equal(2, countRegNumber('CA 42665, AA 12 RT GP'))
    });
});