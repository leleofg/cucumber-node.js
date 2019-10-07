const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");

Given("today is {string}", function (givenDay) {
    this.today = givenDay;
});

When("I ask whether its Friday yet", function () {
    this.actualAnswer = this.isItsFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer) {
    expect(this.actualAnswer).to.eql(expectedAnswer);
});