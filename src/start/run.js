const config = require("config");
const port = config.get("port");
const sequlize = require("../db/index");

const bootstrapt = async (app) => {
  await sequlize.authenticate({
    logging: false,
  });
  await sequlize.sync({ alter: true, logginng: false });
  app.listen(port, () => {
    console.log(port);
  });
};

module.exports = bootstrapt;
