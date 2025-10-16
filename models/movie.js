const mongoose=require('mongoose');

const movieSchema=mongoose.Schema({
  title:{type:String,required:true},
  genre:{type:String},
  description:{type:String},
  price:{type:Number,required:true}
});

module.exports=mongoose.model('Movie',movieSchema);
