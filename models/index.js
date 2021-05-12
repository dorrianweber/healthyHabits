const User = require('./User');
const Eating = require('./Eating');
const Sleeping = require('./Sleeping');
const Spending = require('./Spending');

// Eating relationships
User.hasMany(Eating, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE'
});

Eating.belongsTo(User, {
    foreignKey: 'user_id',
});

// Sleeping relationships
User.hasMany(Sleeping, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE'
});

Sleeping.belongsTo(User, {
    foreignKey: 'user_id',
});

// Spending relationships
User.hasMany(Spending, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE'
});

Spending.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Eating, Sleeping, Spending };