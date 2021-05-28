const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const nodemailer = require("nodemailer");
const axios = require("axios");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//Active search section
app.get("/active/:city", (req, res) => {
  console.log("hit active");

  axios
    .get(
      `https://api.amp.active.com/v2/search/?city=${req.params.city}&state=CA&radius=50*current_page=1&per_page=200&sort=distance&registerable_only=true&query=running&exclude_children=false&api_key=2ts6ryqrzkb8ccq9ay7wnurq`
    )
    .then((body) => {
      // console.log(body.data);
      return res.json({ data: body.data });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ type: "error", message: error.message });
    });
});

// end active search section

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  express.static(path.join(__dirname, "./healthyhabits/public/index.html"))
);

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
});
