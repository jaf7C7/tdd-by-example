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

export default Dollar;
