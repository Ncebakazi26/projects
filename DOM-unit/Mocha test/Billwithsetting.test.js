describe("The bill with setting factory function", function () {
    describe("set values", function () {
    it("should be able to set the call cost ", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setCritical(12);
        settingsBill.setCallCost(2.75);
        assert.equal(settingsBill.getCallCost(), 2.75);

        let settingsBill1 = BillWithSettings();
        settingsBill1.setCallCost(2.95)
        assert.equal(settingsBill1.getCallCost(), 2.95);
    });
    it("should be able to set the sms cost ", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setSmsCost(0.75)
        assert.equal(settingsBill.getSmsCost(), 0.75);

        let settingsBill1 = BillWithSettings();
        settingsBill1.setSmsCost(0.65)
        assert.equal(settingsBill1.getSmsCost(), 0.65);
    });
    it("should be able to set the call and sms cost ", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(2.75)
        settingsBill.setSmsCost(0.65)
        assert.equal(settingsBill.getSmsCost(), 0.65);
        assert.equal(settingsBill.getCallCost(), 2.75);

        let settingsBill1 = BillWithSettings();
        settingsBill1.setCallCost(1.75)
        settingsBill1.setSmsCost(0.45)
        assert.equal(settingsBill1.getSmsCost(), 0.45);
        assert.equal(settingsBill1.getCallCost(), 1.75);
    });
    it("should be able to set the warning level", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setWarning(30)
        assert.equal(settingsBill.getWarning(),30);

        let settingsBill1 = BillWithSettings();
        settingsBill1.setWarning(15)
        assert.equal(settingsBill1.getWarning(),15);

    });
    it("should be able to set the critical level", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setCritical(10)
        assert.equal(settingsBill.getCritical(),10);

        let settingsBill1 = BillWithSettings();
        settingsBill1.setCritical(25)
        assert.equal(settingsBill1.getCritical(),25);

    });
    it("should be able to set the warning and critical level", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setCritical(12)
        settingsBill.setWarning(20)
        assert.equal(settingsBill.getWarning(),20);
        assert.equal(settingsBill.getCritical(),12);


        let settingsBill1 = BillWithSettings();
        settingsBill1.setWarning(40)
        settingsBill1.setCritical(100)
        assert.equal(settingsBill1.getWarning(),40);
        assert.equal(settingsBill1.getCritical(),100);

    });
    
});

describe("Make use of values", function () {
    it("should be able to use the cost set for 2 calls at 2.25 ", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setCritical(10);
        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.75);

        settingsBill.makeCall();
        settingsBill.makeCall();
        
        assert.equal(settingsBill.getTotalCallCost(), 4.50);
        assert.equal(settingsBill.getTotalSmsCost(), 0.00);
        assert.equal(settingsBill.getTotal(), 4.50);
    });
    it("should be able to use the cost set for 2 calls at 1.25 ", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setCritical(10);
        settingsBill.setCallCost(1.25);
        settingsBill.setSmsCost(0.75);

        settingsBill.makeCall();
        settingsBill.makeCall();

        
        assert.equal(settingsBill.getTotalCallCost(), 2.50);
        assert.equal(settingsBill.getTotalSmsCost(), 0.00);
        assert.equal(settingsBill.getTotal(), 2.50);
    });
    it("should be able to send 2 sms at 0.25 ", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setCritical(10);
        settingsBill.setCallCost(1.25);
        settingsBill.setSmsCost(0.25);

        settingsBill.sendSms();
        settingsBill.sendSms();

        assert.equal(settingsBill.getTotalCallCost(), 0.00);
        assert.equal(settingsBill.getTotalSmsCost(), 0.50);
        assert.equal(settingsBill.getTotal(), 0.50);
});  
it("should be able to send 4 sms at 0.25 ", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setCritical(10);
    settingsBill.setCallCost(1.25);
    settingsBill.setSmsCost(0.25);

    settingsBill.sendSms();
    settingsBill.sendSms();
    settingsBill.sendSms();
    settingsBill.sendSms();

    assert.equal(settingsBill.getTotalCallCost(), 0.00);
    assert.equal(settingsBill.getTotalSmsCost(), 1);
    assert.equal(settingsBill.getTotal(), 1);
});  
it("should be able to send 2 sms at 0.25 and make 3 call at 2.75", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setCritical(10);
    settingsBill.setCallCost(1.25);
    settingsBill.setSmsCost(0.25);

    settingsBill.sendSms();
    settingsBill.sendSms();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();

    
    assert.equal(settingsBill.getTotalCallCost(),3.75);
    assert.equal(settingsBill.getTotalSmsCost(),0.50);
    assert.equal(settingsBill.getTotal(), 4.25);
});  
it("should be able to send 4 sms at 0.25 and make 4 call at 2.75", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setCritical(10);
    settingsBill.setCallCost(1.25);
    settingsBill.setSmsCost(0.25);

    settingsBill.sendSms();
    settingsBill.sendSms();
    settingsBill.sendSms();
    settingsBill.sendSms();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();

    
    assert.equal(settingsBill.getTotalCallCost(),5);
    assert.equal(settingsBill.getTotalSmsCost(),1);
    assert.equal(settingsBill.getTotal(),6);
}); 
}); 
describe("The warning and critical level function", function () {
    it("should return class name warning if the warning level is reached", function () {  
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.35)
        settingsBill.setSmsCost(0.85)
        settingsBill.setWarning(5);
        settingsBill.setCritical(10);
    
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(settingsBill.classColor(),"warning");

    });
    it("should return class name critical if the critical level is reached", function () {  
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(2.50)
        settingsBill.setSmsCost(0.75)
        settingsBill.setCritical(15)

        
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(settingsBill.classColor(),"danger");

    });
    it("should stop adding call cost if the critical level is reached", function () {  
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(2.50)
        settingsBill.setSmsCost(0.75)
        settingsBill.setCritical(15)

        
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(settingsBill.classColor(),"danger");
        assert.equal(settingsBill.getTotalCallCost(),15);

    });
    it("should allow total to increase again after upping the critical level", function () {  
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(5.50)
        settingsBill.setSmsCost(1.75)
        settingsBill.setCritical(25)
        settingsBill.setWarning(20)

        
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(settingsBill.classColor(),"danger");
        assert.equal(settingsBill.getTotalCallCost(),27.5);

        settingsBill.setCritical(50)
        assert.equal(settingsBill.classColor(),"warning");
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(settingsBill.getTotalCallCost(),38.5);




    });

});
});