//here we create the schema and models
const mongoose=require('mongoose')
const Schema = mongoose.Schema;

// create the schema
const blogSchema = new Schema(
    {
    title: {
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
        body:{
        type:String,
        required:true
    },
},
{timestamps:true}
)

// create the model based on above schema
const Blog = mongoose.model('Blog',blogSchema) //Blog autometically looked to the blogs colection in the database we defined which is first argument and second one is schema we just created

// enabling use of Blog for otheer
module.exports= Blog;

//Finally we have created our schema and model as blogSchema and Blog model