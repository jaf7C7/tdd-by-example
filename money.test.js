import assert from "node:assert";
import { test } from "node:test";
import { Dollar, Franc } from "./money.js";

test("Dollar multiplication", () => {
	const five = new Dollar(5);
	assert.equal(new Dollar(10).equals(five.times(2)), true);
	assert.equal(new Dollar(15).equals(five.times(3)), true);
});

test("Franc multiplication", () => {
	const five = new Franc(5);
	assert.equal(new Franc(10).equals(five.times(2)), true);
	assert.equal(new Franc(15).equals(five.times(3)), true);
});

test("Equality", () => {
	assert.equal(new Dollar(5).equals(new Dollar(5)), true);
	assert.equal(new Dollar(5).equals(new Dollar(6)), false);
});
