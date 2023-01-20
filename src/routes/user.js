const { Router } = require("express");
const router = Router();

const { getAllUsers } = require("../controllers/user.controller");

router.get("/", getAllUsers);

module.exports = router;

