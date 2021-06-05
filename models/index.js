const User = require("./User");
const Eating = require("./Eating");
const Sleeping = require("./Sleeping");
const Spending = require("./Spending");
const Exercise = require("./Exercise");

// Eating relationships
User.hasMany(Eating, {
  foreignKey: "user_id",
});

Eating.belongsTo(User, {
  foreignKey: "user_id",
});

// Sleeping relationships
User.hasMany(Sleeping, {
  foreignKey: "user_id",
});

Sleeping.belongsTo(User, {
  foreignKey: "user_id",
});

// Spending relationships
User.hasMany(Spending, {
  foreignKey: "user_id",
});

Spending.belongsTo(User, {
  foreignKey: "user_id",
});

// Exercise relationships
User.hasMany(Exercise, {
  foreignKey: "user_id",
});

Exercise.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Eating, Sleeping, Spending, Exercise };
