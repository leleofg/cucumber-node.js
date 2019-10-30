const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    routes() {
        this.express.use(require("./routes"));
    }
}

module.exports = new AppController().express;