describe('The registration number/s for specific town function(countAllFromTown())', function () {
    it('should count registration numbers for Limpopo and return 1 for the number of registration that belongs to Limpopo', function () {
      assert.equal(1, countAllFromTown('L DRT 122','L'))
    });
    it('Should count all registration numbers  for Gaunteng and return 2 for the number of registration that belongs to Gaunteng ' , function () {
      assert.equal(2, countAllFromTown('GP DR 12 TY,GP DR 13 TY','GP'))
    });
    it('Should count all registration numbers for Mpumalanga and return 3 for the number of registration that belongs Mpumalanga' , function () {
        assert.equal(3, countAllFromTown('MP DRT 222,MP DRT 232 , MP DRT 333','MP'))
      });
  });