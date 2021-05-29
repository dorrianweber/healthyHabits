const router = require("express").Router();
const { User, Sleeping, Eating, Spending, Exercise } = require("../models");
const withAuth = require("../utils/auth");
router.get("/", async (req, res) => {
  console.log(req);
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        { model: Sleeping },
        { model: Eating },
        { model: Spending },
        { model: Exercise },
      ],
    });

    // const sleepingData = await Sleeping.find({
    //   where:{
    //      user_id: req.session.user_id,
    //   }
    // });

    // const spendingData = await Spending.findAll(req.session.user_id, {
    //   where: user_id = req.session.user_id
    // });

    // const eatingData = await Eating.findAll(req.session.user_id, {
    //   where: user_id = req.session.user_id
    // });

    const user = userData.get({ plain: true });

    // const sleep = sleepingData.get({ plain: true });
    // console.log(sleepingData);
    // const spend = spendingData.get({ plain: true });
    // const eat = eatingData.get({ plain: true });

    res.render("profile", {
      user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

// Category select page for submissions
router.get("/categorySelect", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  res.render("categorySelect", {
    logged_in: req.session.logged_in,
  });
});

// Eating info submit page
router.get("/eatingForm", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  res.render("eatingForm", {
    logged_in: req.session.logged_in,
  });
});

// Exercise info submit page
router.get("/exerciseForm", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  res.render("exerciseForm", {
    logged_in: req.session.logged_in,
  });
});

// Sleeping info submit page
router.get("/sleepingForm", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  res.render("sleepingForm", {
    logged_in: req.session.logged_in,
  });
});

// Spending info submit page
router.get("/spendingForm", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  res.render("spendingForm", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
