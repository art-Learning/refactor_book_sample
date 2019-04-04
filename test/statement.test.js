var mocha = require("mocha");
var chai = require("chai");
chai.should();

var state = require("../src/statement.js");
var statement = state.statment;
var htmlStatment = state.htmlStatement;

var plays = require("../src/data/plays.json");
var invoices = require("../src/data/invoices.json");

describe("statement()", () => {
  it("Test1", () => {
    const format = new Intl.NumberFormat("eu-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    }).format;
    var expected = `Statement for BigCo
  Hamlet: ${format(650)} (55 seats)
  As You Like It: ${format(580)} (35 seats)
  Othello: ${format(500)} (40 seats)
Amount owed is ${format(1730)}
You earned 47 credits
`;
    let invoice = invoices[0];
    let actual = statement(invoice, plays);
    actual.should.equal(expected);
  });

  it("test2", () => {
    let invoice = invoices[0];
    let actual = htmlStatment(invoice, plays);
    console.log(actual);
  });
});
