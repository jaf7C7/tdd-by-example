class Money {
	amount;

	static dollar(amount) {
		return new Dollar(amount);
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
	times(multiplier) {
		return new Dollar(this.amount * multiplier);
	}
}

class Franc extends Money {
	times(multiplier) {
		return new Franc(this.amount * multiplier);
	}
}

export { Dollar, Franc, Money };
