const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quote_ranks', {useNewUrlParser: true });

const QuoteSchema = new mongoose.Schema({
  quote: {type: String, minlength: [3, "Quote must be at least 3 characters"]},
  vote: {type: Number, default: 0}
})

const AuthorSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Author name is required"], minlength: [3, "Author name must be at least 3 characters"]},
  quotes: [QuoteSchema], 
}, {timestamps:true});

const Author = mongoose.model('Author', AuthorSchema);
const Quote = mongoose.model('Quote', QuoteSchema);
module.exports = {
  Author: Author,
  Quote: Quote
}