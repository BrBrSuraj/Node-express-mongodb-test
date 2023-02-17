const express = require('express')
const mongoose =require('mongoose')
const blogRoutes=require('./routes/blogRoutes')
const app = express()

// ---------------------Database Connection using MOngoose package-----------------------
//first import mongoose by require('mongoose')
//connection
const databaseUri='mongodb+srv://surajpaudel:surajpaudel1234@nodeexposer.bk313hy.mongodb.net/nodeexpo?retryWrites=true&w=majority';
mongoose.set('strictQuery',false)
mongoose.connect(databaseUri)
.then((result)=>app.listen(3000,()=>console.log("app is running on http://localhost:3000")))
.catch((err)=>console.log("error occor"+" "+err))
// end connection section----------------------------------------------------------------------


// ------------------------------
app.set('view engine', 'ejs') 
app.use(express.static('public'))
app.use(express.urlencoded({extended:true})) //this line is used to grabe the form data in responce as res.body gives the object of currenty send form data
// -----------------------------------------

//blog route----------------------
app.use(blogRoutes);
//endblogroutes-----------------------

app.use((req, res) => {
    res.status(404).render('404', { title: 'NotFound' });
});