const mongoose=require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/Newprojectdb',
{
    useNewUrlParser:true
}
);

const User=mongoose.model('User',{
   
    uname:String,
    email:String,
    password:String
});
module.exports={
    User
}