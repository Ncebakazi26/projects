describe('The over 20 quantity items function(findItemsOver20())', function () {
    it('should return  products that have a quantity value that is higher than 20 ', function () {
      assert.deepEqual(findItemsOver20([{'name':'apples', qty:13},{'name':'pears', qty:37},{'name':'bananas',qty:27}]),[{'name':'pears',qty:37},{'name':'bananas',qty:27}])
    });
    it('should return products that have a quantity value that is higher than 20 ', function () {
      assert.deepEqual(findItemsOver20([{'name':'apples', qty:13},{'name':'bananas',qty:27}]),[{'name':'bananas',qty:27}])
    });
    it('should return an empty array because all the products have a quantity value that is below 20', function () {
      assert.deepEqual(findItemsOver20([{'name':'apples', qty:13}]),[])
    });
  });
    