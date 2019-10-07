const { setWorldConstructor } = require("cucumber");

class World {
    constructor() {
        this.variable = 0;
    }

    setTo(number) {
        this.variable = number;
    }

    incrementBy(number) {
        this.variable += number;
    }

    isItsFriday(today) {
        if (today === "Friday") {
            return "TGIF";
        }
        return "Nope";
    }
}

setWorldConstructor(World);