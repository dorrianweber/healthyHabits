const sequelize = require("../config/connection");
const { User, Spending, Sleeping, Exercise, Eating } = require("../models");

const userData = require("./user.json");
const sleepingData = require("./sleeping.json");
const eatingData = require("./eating.json");
const spendingData = require("./spending.json");
const exerciseData = require("./exercise.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Sleeping.bulkCreate(sleepingData, {
    returning: true,
  });

  await Eating.bulkCreate(eatingData, {
    returning: true,
  });

  await Spending.bulkCreate(spendingData, {
    returning: true,
  });

  await Exercise.bulkCreate(exerciseData, {
    returning: true,
  });

  process.exit(0);
};

seedAll();
