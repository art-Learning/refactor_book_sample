var mocha = require("mocha");
var chai = require("chai");
chai.should();

var statement = require("../src/statement.js");
var plays = require("../src/data/plays.json");
var invoices = require("../src/data/invoices.json");

const format = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
}).format;

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
});
