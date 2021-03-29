describe('The day of the week function(isWeekday())', function () {
    it('should check if Monday is a day of the week and return true', function () {
        assert.equal(true, isWeekday('Monday'))
    });
    it('Should check if Tuesday is a day of the week and return true', function () {
        assert.equal(true, isWeekday('Tuesday'))
    });
    it('Should check if Saturday is a day of the week, if not it should return false', function () {
        assert.equal(false, isWeekday('Saturday'))
    });
});