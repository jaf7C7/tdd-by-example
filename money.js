class Dollar {
	#amount

	constructor(amount) {
		this.#amount = amount;
	}

	times(multiplier) {
		return new Dollar(this.#amount * multiplier);
	}

	equals(dollar) {
		return dollar.#amount === this.#amount;
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
