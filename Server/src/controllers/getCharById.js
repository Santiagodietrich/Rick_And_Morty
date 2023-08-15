
// const axios=require("axios")


//     const getCharById=((res,id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data})=>{
//         // const{id,name,gender,species,origin,image,status}=response.data
//         const characterInfo={id:id,name:data.name,gender:data.gender,species:data.species,origin:data.origin,image:data.image,status:data.status}
//         // return characterInfo
//         res.writeHead(200,{"content-type":"application.json"})
//         res.end(JSON.stringify(characterInfo))
//     })
//     .catch((error)=>{
//         // console.error("error al obtener la informacion del personaje: ",error.message)
//         res.writeHead(500,{"content-type":"text/plain"})
//         res.end(error.message)
        
        
//     })
    
// })

// module.exports=getCharById

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// const axios=require("axios")
// const URL="http://rickandmortyapi.com/api/character"

//  const getCharById=((req,res)=>{
//     const{id}=req.params
//     axios(`${URL}/${id}`).then(({data})=>{
//         if({id}){
//             res.json({id:id,name:data.name,gender:data.gender,species:data.species,origin:data.origin,image:data.image,status:data.status})
//         }else{
//             res.end(404,"Not fount")
//         }
//         // if (data.error) {
//         //     res.status(404).json({ message: "Not found" });
//         // } else {
//         //     const { id, status, name, species, origin, image, gender } = data;
//         //     res.json({ id, status, name, species, origin, image, gender });
//         // }
//     }) 
//     .catch((error)=>{
//          console.error("error al obtener la informacion del personaje: ",error.message)
//          res.end(500,error.message)
//         })


// })

// module.exports=getCharById;



// const axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character";

// const getCharById = (req, res) => {
//     const { id } = req.params;

//     axios(`${URL}/${id}`)
//         .then(({ data }) => {
//             if (data.error) {
//                 res.status(404).json({ message: "Not found" });
//             } else {
//                 const { id, status, name, species, origin, image, gender } = data;
//                 res.json({ id, status, name, species, origin, image, gender });
//             }
//         })
//         .catch((error) => {
//             console.error("Error al obtener la información del personaje: ", error.message);
//             res.status(500).json({ error: error.message });
//         });
// };

// module.exports = getCharById;

 const axios = require("axios");
 const URL = "https://rickandmortyapi.com/api/character";

const getCharById=async(req, res)=>{
    try{const {id}=req.params
    const {data}=await axios(`${URL}/${id}`)
    if({id}){
        res.json({id:id,name:data.name,gender:data.gender,species:data.species,origin:data.origin,image:data.image,status:data.status})
    }else{
        res.end(404,"Not fount")
    }

    }catch(error){
        res.status(500).json({ error: error.message });
        
    }
    
}
module.exports = getCharById;