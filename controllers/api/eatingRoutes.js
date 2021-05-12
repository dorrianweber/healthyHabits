const router = require("express").Router();
const { Eating } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newEat = await Eating.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newEat);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", withAuth, async (req, res) => {
  try {
    const eatData = await Eating.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    //
    //const allEats = eatData.map((contents) => contents.get({ plain: true }));
    console.log(eatData);
    return res.json({ data: eatData, success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const eatData = await eat.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!eatData) {
      res.status(404).json({ message: "No food found with this id!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
