import assert from "node:assert";
import { test } from "node:test";
import Dollar from "./money.js";

test("Multiplication", () => {
	const five = new Dollar(5);
	five.times(2);
	assert.equal(10, five.amount);
});
