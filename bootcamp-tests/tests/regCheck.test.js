describe('The registration number function', function () {
    it('should check if the registration number is for Gaunteng Province', function () {
        assert.equal(true, regCheck('DR 12 TY GP', 'GP'))
    });
    it('Should check if the registration number is for Limpopo,', function () {
        assert.equal(true, regCheck(' DRT 122 L', 'L'))
    });
    it('Should check if the registration number is for Eastern Cape,', function () {
        assert.equal(true, regCheck(' DRT 132 EC', 'EC'))
    });
    it('Should check if the registration number is for Mpumalanga,', function () {
        assert.equal(true, regCheck(' DRT 222 MP', 'MP'))
    });
    it('Should check if the registration number is for GP,L,EC,MP', function () {
        assert.equal(false, regCheck('CA 98912', 'CP'))
    });
});