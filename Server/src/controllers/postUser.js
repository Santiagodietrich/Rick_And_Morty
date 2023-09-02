const {User}=require("../DB_connection")
// const {User}=require("../models/User")

const postUser=async(req, res)=>{
    
        const{email, password}=req.body
        if(!email || !password){
            return res.status(400).json({error:"Faltan datos"})
        } 
       try{   
        const user=await User.findOrCreate({
            where:{email},
            default:{password}
        })
        if(created){
           return res.status(201).json(user)
        }
        return res.status(400).json({message:"El usuario ya existe"})


    }catch(error){
        res.status(500).json({error:error.message})
    }

}

module.exports=postUser;