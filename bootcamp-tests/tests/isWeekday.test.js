describe('The day of the week function(isWeekday())', function () {
    it('should return true if Monday is a day of the week ', function () {
        assert.equal(true, isWeekday('Monday'))
    });
    it('Should return true if Tuesday is a day of the week ', function () {
        assert.equal(true, isWeekday('Tuesday'))
    });
    it('Should should return false if Saturday is not  a day of the week ', function () {
        assert.equal(false, isWeekday('Saturday'))
    });
});