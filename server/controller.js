const model = require("./model.js");

module.exports = {
  allAuthors: (req, res) => {
    model.Author.find({})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  oneAuthor: (req, res) => {
    model.Author.findById({_id: req.params.id})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addAuthor: (req, res) => {
    model.Author.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addQuote: (req, res) => {
    const id = req.params.id;
    model.Author.findByIdAndUpdate(id, {$push: {quotes: req.body}})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateQuote: (req, res) => {
    const id = req.params.id;
    model.Author.findById(id)
      .then(data => {
        console.log(data['quotes']);
        for(let x of data['quotes']){
          if(req.params.idq == x._id){
            x.vote += 1;
            data.save();
            res.json(data);
            };}
      })
      .catch(err => res.json(err));
  },

  decreaseVote: (req, res) => {
    const id = req.params.id;
    model.Author.findById(id)
      .then(data => {
        for(let x of data['quotes']){
          if(req.params.idq == x._id){
            x.vote -= 1;
            data.save();
            res.json(data);
            };}
      })
      .catch(err => res.json(err));
  },

  deleteQuote: (req, res) => {
    const id = req.params.id;
    model.Author.findById(id)
    .then(data => {
      console.log(data['quotes']);
      for(let i in data['quotes']){
        if(req.params.idq == data['quotes'][i]._id){
          data['quotes'].splice(i,1);
          data.save();
          res.json(data);
        }
      }})
    .catch(err => res.json(err));
  }
}