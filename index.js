require("dotenv").config();
const { config } = require("./src/configs/config");
const express = require("express");
const app = express();

const usersRoutes = require("./src/routes/user");
app.use("/users", usersRoutes);

app.get("/test", (req, res) => {
    res.status(200).json(`Server OK... ${process.pid}`);
});

app.listen(config.port, async () => {
    console.log(`:::: Server Started => PORT ${config.port} | ${config.environment} mode ::::`);

    const url = `http://localhost:${config.port}/test`;
    console.log("\nCheck status at ", url);
});
