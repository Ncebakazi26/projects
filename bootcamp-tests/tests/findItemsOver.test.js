describe('The over threshold quantity items function(findItemsOver())', function () {
    it('should check for the product that have a quantity value that is higher than the threshold,the threshold having a value of 30.And return the pears quantity value', function () {
        assert.deepEqual(findItemsOver([{ 'name': 'apples', qty: 13 }, { 'name': 'pears', qty: 37 }, { 'name': 'bananas', qty: 27 }], 30), [{ 'name': 'pears', qty: 37 }])
    });
    it('Should check for the product that have a quantity value that is higher than 12.And return the apples quantity', function () {
        assert.deepEqual(findItemsOver([{ 'name': 'apples', qty: 13 }, { 'name': 'pears', qty: 5 }, { 'name': 'bananas', qty: 7 }], 12), [{ 'name': 'apples', qty: 13 }])
    });
    it('Should check for the product that have a quantity value that is higher than threshold, the threshold having a value of 40. And return an empty array as all the values are below 40', function () {
        assert.deepEqual(findItemsOver([{ 'name': 'apples', qty: 15 }, { 'name': 'pears', qty: 19 }, { 'name': 'bananas', qty: 25 }], 40), [])
    });
});
