class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.index = null;
    }


    setRange(min, max) {
        this.min = min;
        this.max = max;
    }


    guess() {
        return  this.index = Math.ceil((this.min + this.max) / 2);
}

    lower() {
        this.max = this.index;

    }

    greater() {
        this.min = this.index;

    }
}

module.exports = GuessingGame;
