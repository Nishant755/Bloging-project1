const express = require('express');
const router = express.Router();
const blogController= require("../controller/blog.js")
const authController= require("../controller/auth.js")



router.post("/blog", blogController.createBlog)
router.post("/Author", authController.createAuthor)
router.get("/blogs", blogController.getBlog)



module.exports = router;