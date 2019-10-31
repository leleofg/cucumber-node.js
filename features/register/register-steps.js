const { Given, Then, BeforeAll, AfterAll } = require("cucumber");
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

AfterAll(async () => {
});

Given("the email {string}", function (email) {
    this.setEmail(email);
});

Given("the name {string}", function (name) {
    this.setName(name);
});

Given("the password {string}", function (password) {
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