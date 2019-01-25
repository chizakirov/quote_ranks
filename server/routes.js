const controller = require("./controller.js");
const path = require("path");

module.exports = function(app){
  app
    .get('/api/authors', controller.allAuthors)
    .get('/api/authors/:id', controller.oneAuthor)
    .post('/api/authors', controller.addAuthor)
    .patch('/api/authors/:id', controller.addQuote)
    .patch('/api/authors/:id/quotes/:idq', controller.updateQuote)
    .patch('/api/authors/:id/down/:idq', controller.decreaseVote)
    .delete('/api/authors/:id/quotes/:idq', controller.deleteQuote)
    .all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}