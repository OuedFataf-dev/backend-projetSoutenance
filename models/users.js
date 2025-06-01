module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    tableName: 'users' // 👈 Ce nom doit correspondre à ta table MySQL
  });

  return User;
};
