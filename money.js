class Money {
	amount;

	constructor(amount) {
		this.amount = amount;
	}

	equals(money) {
		return money.amount === this.amount;
	}
}

class Dollar extends Money {
	times(multiplier) {
		return new Dollar(this.amount * multiplier);
	}
}

class Franc {
	#amount

	constructor(amount) {
		this.#amount = amount;
	}

	times(multiplier) {
		return new Franc(this.#amount * multiplier);
	}

	equals(Franc) {
		return Franc.#amount === this.#amount;
	}
}

export { Dollar, Franc };
