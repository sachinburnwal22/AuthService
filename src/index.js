const express = require("express");
const bodyParser = require("body-parser");
const { PORT, DB_SYNC } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const db = require("./models/index");

const app = express();

const prepareAndStartServer = () => {
  // Middlewares
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Routes
  app.use("/api", apiRoutes);

  // Start server
  app.listen(PORT, async () => {
    console.log(`✅ Server started on port ${PORT}`);

    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }

    // const u1 = await User.findByPk(4);
    // const r1 = await Role.findByPk(1);
    // u1.addRole(r1);
    // const response = await u1.hasRole(r1);
    // console.log(response);
  });
};

prepareAndStartServer();
