describe('The over 20 quantity items function(findItemsOver20())', function () {
    it('should check for the product that have a quantity value that is higher than 20 and return quantity value for pears and bananas ', function () {
      assert.deepEqual(findItemsOver20([{'name':'apples', qty:13},{'name':'pears', qty:37},{'name':'bananas',qty:27}]),[{'name':'pears',qty:37},{'name':'bananas',qty:27}])
    });
    it('should check for the product that have a quantity value that is higher than 20 and return quantity value of bananas', function () {
      assert.deepEqual(findItemsOver20([{'name':'apples', qty:13},{'name':'bananas',qty:27}]),[{'name':'bananas',qty:27}])
    });
    it('should check for the product that have a quantity value that is higher than 20 and if it does not find it ,it should return an empty array', function () {
      assert.deepEqual(findItemsOver20([{'name':'apples', qty:13}]),[])
    });
  });
    