import assert from "node:assert";
import { test } from "node:test";
import { Money } from "./money.js";

test("Dollar multiplication", () => {
	const five = Money.dollar(5);
	assert.equal(Money.dollar(10).equals(five.times(2)), true);
	assert.equal(Money.dollar(15).equals(five.times(3)), true);
});

test("Franc multiplication", () => {
	const five = Money.franc(5);
	assert.equal(Money.franc(10).equals(five.times(2)), true);
	assert.equal(Money.franc(15).equals(five.times(3)), true);
});

test("Dollar equality", () => {
	assert.equal(Money.dollar(5).equals(Money.dollar(5)), true);
	assert.equal(Money.dollar(5).equals(Money.dollar(6)), false);
});

test("Franc equality", () => {
	assert.equal(Money.franc(5).equals(Money.franc(5)), true);
	assert.equal(Money.franc(5).equals(Money.franc(6)), false);
});

test("Dollar-Franc equality", () => {
	assert.equal(Money.franc(5).equals(Money.dollar(5)), false);
});

test("Currency", () => {
	assert.equal("USD", Money.dollar(1).currency);
	assert.equal("CHF", Money.franc(1).currency);
});
