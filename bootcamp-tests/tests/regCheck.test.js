describe('The registration number function(regCheck())', function () {
    it('should return true if the registration number is for Gaunteng Province', function () {
        assert.equal(true, regCheck('DR 12 TY GP', 'GP'))
    });
    it('Should return true if the registration number is for Limpopo ', function () {
        assert.equal(true, regCheck(' DRT 122 L', 'L'))
    });
    it('Should return true if the registration number is for Eastern Cape', function () {
        assert.equal(true, regCheck(' DRT 132 EC', 'EC'))
    });
    it('Should return true if the registration number is for Mpumalanga', function () {
        assert.equal(true, regCheck(' DRT 222 MP', 'MP'))
    });
    it('Should return true if the registration number is for GP,L,EC,MP', function () {
        assert.equal(false, regCheck('CA 98912', 'CP'))
    });
});