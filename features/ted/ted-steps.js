const { Given, Then, BeforeAll, When } = require("cucumber");
const { expect } = require("chai");
const chai = require("chai");
const mongoose = require("mongoose");
const chaiHttp = require("chai-http");
const app = require("../../src/app");
const User = require("../../src/models/User");
chai.use(chaiHttp);
chai.use(require('chai-things'));

Given("the account number {int} and branch {int}", function (account, branch) { });

When("entering account data to do the transfer with account number {int}, branch {int} and value {int}", function (account, branch, value) {
});

Then("response status ted should be {int}", function (number) {
    return 201;
});