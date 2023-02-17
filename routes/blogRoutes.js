const express = require('express')
const blogController=require('../controllers/blogController')
const router = express.Router()

router.get('/', blogController.blog_index);
router.get('/about', blogController.aboutus)
router.get('/blogs/create', blogController.blog_create_get)

router.post('/blogs', blogController.blog_create_post)
router.get('/blogs/:id',blogController.blog_details)
router.get('/blogs/:id',blogController.blog_details)

module.exports=router;