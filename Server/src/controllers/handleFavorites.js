// let myFavorites=[]

//  const postFav=(req,res)=>{
//     let {id}=req.body
//     const findRepeat=myFavorites.find(char=>char.id === id)
//     if(findRepeat){
//         return res.status(400).json({error:"este personaje ya fue seleccionado"})
//     }
//     myFavorites.push(req.body)//Mejor manera: ? req.body =>{id, name, status}=req.body
//     res.json(myFavorites)      //ojo si viene un id repetido 

// }

// const deleteFav=(req, res)=>{
//     const eliminar=parseInt(req.params.id)
//     myFavorites=myFavorites.filter((characters)=>characters.id !== eliminar)
//     res.json(myFavorites)

//     //OTRA MANERA
//     // const deleteFav = (req, res) => {
//     // const{id}=req.params
//     // const filtered=myFavorites.filter(fav=>fav.id !== numbrer(id))
//     // myFavorites=filtered
//     // res.json(myFavorites)

//  }

// module.exports={postFav, deleteFav}