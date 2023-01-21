import mongoose from "mongoose";

// Create a schema   

const Post = new mongoose.Schema({
    name: {type:String, required:true},
    prompt: {type:String, required:true},
    photo: {type:String, required:true},
});

// now create a model out of the above schema

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;