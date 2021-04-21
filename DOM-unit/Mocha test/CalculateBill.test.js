describe("The calculate bill factory function", function () {
  it("should be able to add call cost and return total ", function () {
    let calculate = calculateBill();
    calculate.calculateCallandSms("call")
    calculate.calculateCallandSms("call")
    calculate.calculateCallandSms("call")
    calculate.calculateCallandSms("call")
    assert.equal(calculate.getTotalcalcalculated(), 11);
  });
  it("should be able to add sms cost and return total ", function () {
    let calculate = calculateBill();
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("sms")
    assert.equal(calculate.getTotalcalcalculated(), 3);
  });
  it("should be able to add sms and call cost and return total ", function () {
    let calculate = calculateBill();
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("call")
    calculate.calculateCallandSms("call")
    calculate.calculateCallandSms("call")
    assert.equal(calculate.getTotalcalcalculated(), 11.25);
  });
  it("should return orange if the total is between 20 and 29", function () {
    let calculate = calculateBill();
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("call")
    calculate.calculateCallandSms("call")
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("call")
    calculate.calculateCallandSms("call")
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("call")
    calculate.calculateCallandSms("call")
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("sms")
    calculate.calculateCallandSms("call")
  
    assert.equal(calculate.getTotalcalcalculated(), 25.25);
    assert.equal("Orange", calculate.showColor());
});
});
