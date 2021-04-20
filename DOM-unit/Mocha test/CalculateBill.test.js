describe("The calculate bill factory function", function () {
  it("should be able to add call cost and return total ", function () {
    assert.equal(calculateCallandSms("call, sms, call, sms, sms"), 7.75);
  });
});
