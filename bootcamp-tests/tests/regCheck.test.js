describe('The registration number function(regCheck())', function () {
    it('should check if the registration number is for Gaunteng Province and return true', function () {
        assert.equal(true, regCheck('DR 12 TY GP', 'GP'))
    });
    it('Should check if the registration number is for Limpopo, and return true', function () {
        assert.equal(true, regCheck(' DRT 122 L', 'L'))
    });
    it('Should check if the registration number is for Eastern Cape,and return true', function () {
        assert.equal(true, regCheck(' DRT 132 EC', 'EC'))
    });
    it('Should check if the registration number is for Mpumalanga,and return true', function () {
        assert.equal(true, regCheck(' DRT 222 MP', 'MP'))
    });
    it('Should check if the registration number is for GP,L,EC,MP, and return true', function () {
        assert.equal(false, regCheck('CA 98912', 'CP'))
    });
});