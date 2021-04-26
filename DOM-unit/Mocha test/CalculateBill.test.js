describe("The calculate bill factory function", function () {
  it("should be able to add 3 calls cost and return total ", function () {
    let calculate = calculateBill();
    calculate.calculateCallandSms("call,call,call,call")
    
    assert.equal(calculate.getTotalcalcalculated(), 11);
  });
  it("should be able to add 4 sms cost and return total ", function () {
    let calculate = calculateBill();
    calculate.calculateCallandSms("sms,sms,sms,sms")

    assert.equal(calculate.getTotalcalcalculated(), 3);
  });
  it("should be able to add 4 sms and 3 calls cost and return total ", function () {
    let calculate = calculateBill();
    calculate.calculateCallandSms("sms,sms,sms,sms,call,call,call");
   
    assert.equal(calculate.getTotalcalcalculated(), 11.25);
  });
  it("should return class name warning if the total is between 20 and 29", function () {
    let calculate = calculateBill();
    calculate.calculateCallandSms("sms,sms,sms,sms,sms,sms,sms,sms,call,call,call,call,call,call,call")
  
    assert.equal(calculate.getTotalcalcalculated(), 25.25);
    assert.equal("warning", calculate.showColor());
});
it("should return class name danger if the total is 30 and over", function () {
  let calculate = calculateBill();
  calculate.calculateCallandSms("sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,call,call,call,call,call,call,call,call,call,call,call,call")
  
 assert.equal(calculate.getTotalcalcalculated(), 42);
assert.equal("danger", calculate.showColor());
});


});
