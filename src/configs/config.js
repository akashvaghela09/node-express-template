require("dotenv").config();

const config = {
  port: process.env.SERVER2_PORT || 3000,
  environment: process.env.NODE_ENV || "development",
};

module.exports = {
  config,
};
