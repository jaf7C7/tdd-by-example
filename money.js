class Dollar {
	_amount

	constructor(amount) {
		this._amount = amount;
	}

	times(multiplier) {
		return new Dollar(this._amount * multiplier);
	}

	equals(dollar) {
		return dollar._amount === this._amount;
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
