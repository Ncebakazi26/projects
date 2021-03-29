describe('The over threshold quantity items function(findItemsOver())', function () {
    it('should return the  product that have a quantity value that is higher than the threshold', function () {
        assert.deepEqual(findItemsOver([{ 'name': 'apples', qty: 13 }, { 'name': 'pears', qty: 37 }, { 'name': 'bananas', qty: 27 }], 30), [{ 'name': 'pears', qty: 37 }])
    });
    it('Should return the product that have a quantity value that is higher than the threshold ', function () {
        assert.deepEqual(findItemsOver([{ 'name': 'apples', qty: 13 }, { 'name': 'pears', qty: 5 }, { 'name': 'bananas', qty: 7 }], 12), [{ 'name': 'apples', qty: 13 }])
    });
    it('Should return an empty array as all the values are below the threshold', function () {
        assert.deepEqual(findItemsOver([{ 'name': 'apples', qty: 15 }, { 'name': 'pears', qty: 19 }, { 'name': 'bananas', qty: 25 }], 40), [])
    });
});
