class Money {
	static dollar(amount) {
		return new Dollar(amount, "USD");
	}

	static franc(amount) {
		return new Franc(amount, "CHF");
	}

	constructor(amount, currency) {
		this.amount = amount;
		this._currency = currency;
	}

	get currency() {
		return this._currency;
	}

	equals(money) {
		return (
			money.constructor.name === this.constructor.name
			&& money.amount === this.amount
		);
	}
}

class Dollar extends Money {
	times(multiplier) {
		return Money.dollar(this.amount * multiplier);
	}
}

class Franc extends Money {
	times(multiplier) {
		return Money.franc(this.amount * multiplier);
	}
}

export { Dollar, Franc, Money };
