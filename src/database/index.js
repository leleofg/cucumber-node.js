const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(process.env.MONGOOSE_CONNECTION, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;