require("dotenv").config();
const { config } = require("./src/configs/config");
const express = require("express");
const app = express();

const usersRoutes = require("./src/routes/user");
app.use("/users", usersRoutes);

app.listen(config.port, async () => {
    console.log(`:::: Server Started => PORT ${config.port} | ${config.environment} mode ::::`);
});
