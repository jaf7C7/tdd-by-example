class Money {
	constructor(amount) {
		this.amount = amount;
	}
}

class Dollar extends Money {
	constructor(amount) {
		super(amount);
	}

	times(multiplier) {
		return new Dollar(this.amount * multiplier);
	}

	equals(dollar) {
		return dollar.amount === this.amount;
	}
}

class Franc {
	_amount

	constructor(amount) {
		this._amount = amount;
	}

	times(multiplier) {
		return new Franc(this._amount * multiplier);
	}

	equals(Franc) {
		return Franc._amount === this._amount;
	}
}

export { Dollar, Franc };
