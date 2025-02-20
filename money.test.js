import assert from "node:assert";
import { test } from "node:test";
import Dollar from "./money.js";

test("Multiplication", () => {
	const five = new Dollar(5);
	let product = five.times(2);
	assert.equal(10, product.amount);
	product = five.times(3);
	assert.equal(15, product.amount);
});

test("Equality", () => {
	assert.equal(new Dollar(5).equals(new Dollar(5)), true);
	assert.equal(new Dollar(5).equals(new Dollar(6)), false);
});
