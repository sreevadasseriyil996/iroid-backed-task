const db=require('./db')

//register

const register=(uname,email,password)=>{
   
    return db.User.findOne({email:email})
    .then(response=>{
        if(response){
            return {
                status:false,
                statusCode :400,
                message : 'User already exist'
            }
                
            
           
        }
        else{
            const newUser=new db.User({
            
                uname:uname,
                email:email,
                password:password
            })
            newUser.save();
            return ( {
                status:true,
                statusCode:200,
                message :"User registered successfully"
            })
            
            
        }
    })
    .catch((err)=>{
        return {
            status:false,
            statusCode :400,
            message : 'DB error'
        }
    })
}

//login

login =(email,password)=>{
    return db.User.findOne({email})
    .then(user=>{
    if(user){
            currentUser=user.uname
           // let email=email;
            let responsePassword = user.password;
            let data = {
                name:currentUser,
                email:user.email
            }
            if(responsePassword === password ){

                return ( {
                    status:true,
                    statusCode:200,
                    message :"login successfully",
                    data:data
                })
            }
            else{
                return ( {
                    status:false,
                    statusCode:400,
                    message :"password incorrect"
                })
            }
    }
    else{
        return ( {
            status:false,
            statusCode:400,
            message :"invalid user"
        })
    }
    
})
}



module.exports={
    register,login
}