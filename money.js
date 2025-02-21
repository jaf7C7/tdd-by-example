class Money {
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
