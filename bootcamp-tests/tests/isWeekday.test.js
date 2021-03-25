describe('The day of the week function', function () {
    it('should check the string passed is a day of the week', function () {
        assert.equal(true, isWeekday('Monday'))
    });
    it('Should check if the string passed is a day of the week', function () {
        assert.equal(true, isWeekday('Tuesday'))
    });
    it('Should check if the string passed is a day of the week', function () {
        assert.equal(false, isWeekday('Saturday'))
    });
});