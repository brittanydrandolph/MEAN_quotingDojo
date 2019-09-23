const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/quoting_dojo', {useNewUrlParser: true});
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 3},
}, {timestamps: true});
const Quote = mongoose.model("Quote", QuoteSchema);
