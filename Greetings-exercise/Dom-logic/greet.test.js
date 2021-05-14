describe("The greetigs factory function", function () {
    it("should greet a person in English ", function () {
      let greet = greetings();

    assert.equal(greet.language ("Ncebakazi","English"),"Hello Ncebakazi");

    });

    it("should greet a person in isiXhosa ", function () {
      let greet = greetings();
      
    assert.equal(greet.language ("Ncebakazi","isiXhosa"),"Molo Ncebakazi");

    }); 
    it("should greet a person in Sepedi", function () {
      let greet = greetings();
      
    assert.equal(greet.language ("Ncebakazi","Sepedi"), "Dumela Ncebakazi");
    });

    it("should change the first letter to a capital letter", function () {
      let greet = greetings();
      
    assert.equal(greet.language ("ncebakazi","Sepedi"), "Dumela Ncebakazi");
    });
    
    describe("Counter", function () {
      it("should return 4 for counter if 4 people have been greeted ", function () {
        let greet = greetings();
     greet.language("Ncebakazi","English")
     greet.language("Nolwazi","English")
     greet.language("Tebogo,English")
     greet.language("Thato","English")
     
     assert.equal(greet.counter(), 4);
      });
      it("should not increment the counter if the same person is greeted", function () {
        let greet = greetings();
     greet.language("Nolwazi","English")
     greet.language("Nolwazi","English")

     assert.equal(greet.counter(), 1);
    });
  });
  it("should return a message saying enter your name and choose a language ", function () {
    let greet = greetings();
  //greet.language(" ")

 assert.equal(greet.message3("",undefined), "Please enter your name and choose language");
});
 it("should return a message saying please choose a language  ", function () {
  let greet = greetings();

 assert.equal(greet.messages1("Ncebakazi", undefined),"Please choose a language");
 });
 it("should return a message saying please enter your name ", function () {
   let greet = greetings();


 assert.equal(greet.message2("","English"), "Please enter your name first");
 });
});