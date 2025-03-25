class Contador {
    constructor() {
        this.total = 0;
    }

    increment() {
        this.total++;
    }

    decrement() {
        if (this.total == 0) {
            return
        }

        this.total--;
    }

    clear() {
        this.total = 0;
    }
}