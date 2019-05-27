db.sequelize.sync({ force: true }).then(function () {
    return db.Product.bulkCreate(products);
 }).then(function () {
    db.sequelize.close();
 });
 