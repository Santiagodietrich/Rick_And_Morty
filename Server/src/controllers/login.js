//  const users=require("../utils/users.js")
// const login=(req, res)=>{
//     const{email, password}=req.query
//     let access=false

//     users.forEach(users=>{
//         if(users.email === email && users.password === password){
//             access=true
//         }
//     })
//     res.json({access})


    
//      if(access){
//          res.status(200).json({access:true})
     

//      }else{
//           res.status(200).json({access:false})
//      }
// }


// module.exports=login;





// const users = require("../utils/users.js");

// const login = (req, res) => {
//     const { email, password } = req.query;
//     let access = false;

//     users.forEach((user) => {
//         if (user.email === email && user.password === password) {
//             access = true;
//         }
//     });

//     if (access) {
//         res.status(200).json({ access: true });
//     } else {
//         res.status(200).json({ access: false });
//     }
// };

// module.exports = login;
const {User}=require("../DB_connection")
// const {User}=require("../models/User")

const login=async(req, res)=>{
   const{email, password}=req.query
    if(!email || !password){
        return res.status(400).json({message:"Faltan datos"})   //tambien podemos usar el .send en vez del .json 
    }
    try{
    const user= await User.findOne({
        where:{email}
    })
    if(!user){
        return res.status(404).json({message:"Usuario no encontrado"})
    }
    if(user.password !== password){
       return res.status(403).json({message:"Contraseña incorrecta"}) 
    }
    return res.status(200).json({access:true})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
module.exports = login;