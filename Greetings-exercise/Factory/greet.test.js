describe("The greet factory function", function () {
    it("should greet the person in English", function () {
      let lang = greetings()
     assert.equal(lang.language("John","English"),"Hello John");
    });
    it("should greet the person in isiXhosa", function () {
      let lang = greetings()
     assert.equal(lang.language("Ncebakazi","isiXhosa"),"Molo Ncebakazi");
    });
    it("should greet the person in Sepedi", function () {
      let lang = greetings()
     assert.equal(lang.language("Tebogo","Sepedi"),"Dumela Tebogo");
    });
    it("should change the first letter to capital letter and the rest in small letters", function () {
      let lang = greetings()
     assert.equal(lang.language("teBogo","Sepedi"),"Dumela Tebogo");
    });
    it("should not increment counter if the same person has been greeted", function () {
      let lang = greetings()
      lang.language ("Tebogo","English")
      lang.language ("Tebogo","Sepedi")
      lang.language ("Nceba","English")
      lang.language ("Nceba","Sepedi")
      lang.language ("Vasco","English")
      lang.language ("Vasco","Sepedi")

     assert.equal(lang.getCounter(),3);
    });

});