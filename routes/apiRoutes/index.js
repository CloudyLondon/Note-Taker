const router = require("express").Router();
const apiRoutes = require(".apiRoutes"); //made apiRoutes usable

router.use(apiRoutes); //let express use apiRoutes

module.exports = router;
