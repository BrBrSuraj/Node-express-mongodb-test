const Blog = require('../models/blog')
const express=require('express')
//blog_index , blog_details, blog_create_get, blog_create_post,blog_delete

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 }).then((result) => {
        res.render('blogs/index', { title: 'All Blogs', blogs: result })
    }).catch((err) => console.log(err))
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then((result) => {
        res.render('blogs/details', { title: 'Specific Blog Details', blog: result })
    }).catch((err) => res.render('blogs/404',{title:"404 Not Found"}));
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create New Blog' })
}


const blog_create_post = (req, res) => {
    //here we want to access all form's data and save to database
    //use middleware as app.use(express.urlencoded({extended:true})) which mentioned above top
    // then we are able to grab the data comes from form,as req.body-> gives all the data from form
    const blog = new Blog(req.body)
    blog.save().then((result) => {
        res.redirect('/')
    }).catch((err) => console.log(err))
}


// const blog_delete= (req,res)=>{

// }

const aboutus = (req, res) => {
    res.render('blogs/about', { title: 'About' });
}

module.exports = {
    blog_index, blog_details, blog_create_get, blog_create_post, aboutus

}