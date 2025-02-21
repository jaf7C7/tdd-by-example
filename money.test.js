import assert from "node:assert";
import { test } from "node:test";
import { Franc, Money } from "./money.js";

test("Dollar multiplication", () => {
	const five = Money.dollar(5);
	assert.equal(Money.dollar(10).equals(five.times(2)), true);
	assert.equal(Money.dollar(15).equals(five.times(3)), true);
});

test("Franc multiplication", () => {
	const five = new Franc(5);
	assert.equal(new Franc(10).equals(five.times(2)), true);
	assert.equal(new Franc(15).equals(five.times(3)), true);
});

test("Dollar equality", () => {
	assert.equal(Money.dollar(5).equals(Money.dollar(5)), true);
	assert.equal(Money.dollar(5).equals(Money.dollar(6)), false);
});

test("Franc equality", () => {
	assert.equal(new Franc(5).equals(new Franc(5)), true);
	assert.equal(new Franc(5).equals(new Franc(6)), false);
});

test("Dollar-Franc equality", () => {
	assert.equal(new Franc(5).equals(Money.dollar(5)), false);
});
