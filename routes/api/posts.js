const express = require("express");
const router = express.Router();

//@route GET api/posts
//@desc test route
//@access Public
router.post("/", (req, res) => res.send("posts ROUTE"));
module.exports = router;
