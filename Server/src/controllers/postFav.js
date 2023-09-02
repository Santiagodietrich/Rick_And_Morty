const {Favorite} =require("../DB_connection")

const postFav=async(req, res)=>{
        const{name, origin, status, image, species, gender}=req.body
        try{
        if(!name || !origin || !status || !image || !species || !gender){//se puede utilizar el metodo "every" creando el array dentro del mismo if, que recibira un booleano para saber si existen o no las props
            return res.status(401).json({message:"Faltan datos"})
        }
        const fav= await Favorite.create({//podemos utilizar un findOrCreate tambien
            name, origin, status, image, species, gender//where:{...}
        })
        const todosFav= await Favorite.findAll()
        return res.status(200).json(todosFav)


    }catch(error){
        res.status(500).json({error:error.message})
    }
}
module.exports=postFav;