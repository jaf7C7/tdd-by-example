class Money {
	static dollar(amount) {
		return new Dollar(amount, "USD");
	}

	static franc(amount) {
		return new Franc(amount);
	}

	constructor(amount) {
		this.amount = amount;
	}

	equals(money) {
		return (
			money.constructor.name === this.constructor.name
			&& money.amount === this.amount
		);
	}
}

class Dollar extends Money {
	constructor(amount, currency) {
		super(amount);
		this._currency = currency;
	}

	get currency() {
		return this._currency;
	}

	times(multiplier) {
		return Money.dollar(this.amount * multiplier);
	}
}

class Franc extends Money {
	_currency = "CHF";

	get currency() {
		return this._currency;
	}

	times(multiplier) {
		return new Franc(this.amount * multiplier);
	}
}

export { Dollar, Franc, Money };
