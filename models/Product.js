module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
    product_name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [1,160]}
      },
    department_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [1]}
      },
    price:{
        type: DataTypes.INTEGER,
       allowNull: false
        },
    stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
      }
   
    );
    return Product;
  }
   