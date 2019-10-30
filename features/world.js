const { setWorldConstructor } = require("cucumber");

class World {
    constructor() {
        this.variable = 0;
        this.email = null;
        this.name = null;
        this.password = null;
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

    setEmail(email) {
        this.email = email;
    }

    setName(name) {
        this.name = name;
    }

    setPassword(password) {
        this.password = password;
    }
}

setWorldConstructor(World);