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





const users = require("../utils/users.js");

const login = (req, res) => {
    const { email, password } = req.query;
    let access = false;

    users.forEach((user) => {
        if (user.email === email && user.password === password) {
            access = true;
        }
    });

    if (access) {
        res.status(200).json({ access: true });
    } else {
        res.status(200).json({ access: false });
    }
};

module.exports = login;


