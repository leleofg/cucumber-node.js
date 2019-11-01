const { Given, Then, BeforeAll, When } = require("cucumber");
const { expect } = require("chai");
const chai = require("chai");
const mongoose = require("mongoose");
const chaiHttp = require("chai-http");
const app = require("../../src/app");
const User = require("../../src/models/User");
chai.use(chaiHttp);
chai.use(require('chai-things'));

BeforeAll(async () => {
    await User.deleteMany({});
});

Given("the register screen", function () { });

When("fills the fields with {string}, {string} and {string}", function (name, email, password) {
    this.setName(name);
    this.setEmail(email);
    this.setPassword(password);
});

Then("response status should be {int}", function (number) {
    const user = {
        name: this.name,
        email: this.email,
        password: this.password
    };

    chai.request(app)
        .post("/register")
        .send(user)
        .end((err, res) => {
            expect(res).to.have.status(number);
        });
});