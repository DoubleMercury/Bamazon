const db = require("../models");

// Routes =============================================================
module.exports = function(app) {

 
 app.get("/api/products", function(req, res) {
   db.Product.findAll({}).then(function(dbProduct) {
     res.json(dbProduct);
   }).catch(function(error){
     res.json({error: error});
   });

 });
 
 app.get("/api/products/:id", function(req, res) {
  db.Product.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbProduct) {
    res.json(dbProduct);
  });
});


 app.post("/api/products", function(req, res) {
   
   db.Product.create({
     text: req.body.text,
     complete: req.body.complete
   }).then(function(dbProduct) {
     res.json(dbProduct);
   });

 });


 app.delete("/api/products/:id", function(req, res) {
   db.bamazon.destroy({
     where: {
       id: req.params.id
     }
   })
     .then(function(dbProduct) {
       res.json(dbProduct);
     });

 });

 app.put("/api/products/:id", function(req, res) {
   
   db.Product.update(
     req.body,
     {where: { id: req.params.id} }
   ).then(function(dbProduct) {
       res.json(dbProduct);
     });

 });
};
