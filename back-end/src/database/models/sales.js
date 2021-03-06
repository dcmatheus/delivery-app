const sales = (sequelize, DataTypes) => sequelize.define('sales',
  {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    user_id: {type: DataTypes.INTEGER, primaryKey: true},
    seller_id: {type: DataTypes.INTEGER, primaryKey: true},
    total_price: DataTypes.DECIMAL(65, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  sales.associate = (models) => {
    sales.belongsTo(models.users, {
      foreignKey: "user_id",
    });
    sales.belongsTo(models.users, {
    foreignKey: "user_id",
    as: "seller_id"
    });
  };


module.exports = sales;
