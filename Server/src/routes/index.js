

// const express=require("express")
// const router=require("express").Router()
// //CONTROLLERS
// const login=require("../controllers/login")
// const getCharById=require("../controllers/getCharById")
// const {deleteFav, postFav}=require("../controllers/handleFavorites")



// //RUTAS
// router.get("/character/:id",getCharById)
// router.get("/login",login)
// router.post("/fav",postFav)
// router.delete("/fav/:id",deleteFav)




//  module.exports={router}

//CONTROLADORES
const express= require ("express")
const router = express.Router()
const login=require("../controllers/login")
const getCharById=require("../controllers/getCharById")
const deleteFav=require("../controllers/deleteFav")
const postFav=require("../controllers/postFav")
const postUser=require("../controllers/postUser")




//RUTAS
router.get("/character/:id", getCharById)
router.get("/login", login)
router.post("/login", postUser)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports= router