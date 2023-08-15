//HTTP:
// // const data=require("./utils/data")
// const http=require("http")
// const getCharById=require("./controllers/getCharById")

// const PORT=3001

// http.createServer((req,res)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*")//controla el origen de las peticiones,seguridad.
//     const{url} = req
//     if(url.includes("/rickandmorty/character")){
//         const id= Number(url.split("/").pop())
//         getCharById(res, id)
//     }


//     //     const character=data.find((characters)=>characters.id=== id)

//     //     if(character?.id){
//     //         res.writeHead(200,{"content-type":"application/json"})
//     //         res.end(JSON.stringify(character))
//     //     }else{
//     //         res.writeHead(404,{"content-type":"text/plain"})
//     //         res.end("tu personaje no fue encontrado")
//     //     }
//     //     return
//     // }

    

// }).listen(PORT,"localhost")

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const server = express();
// const router=require('./routes')
// const PORT = 3001;
// const cors=require("cors")

// server.use(cors())

// //instalando Morgan!



// //Middleware
// server.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');//los headers son los"encabezados" que recibe nuestra solicitud
//    res.header('Access-Control-Allow-Credentials', 'true');
//    res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//    );
//    res.header(
//       'Access-Control-Allow-Methods',
//       'GET, POST, OPTIONS, PUT, DELETE'
//    );
//    next();
// });

// server.use(express.json())

// server.use('/rickandmorty',router)


// server.listen(PORT, () => {
//    console.log('Server raised in port: ' + PORT);
// });





// const express = require('express');
// const server = express();
// const routes=require('./routes')
// const PORT = 3001;

// const cors= require("cors") //A esto le falta a santi para que le ande
//  server.use(cors())

// server.listen(PORT, () => {
//    console.log('Server raised in port: ' + PORT);
// });
// server.use(express.json())
// server.use("/rickandmorty", routes)


// server.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Credentials', 'true');
//    res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//    );
//    res.header(
//       'Access-Control-Allow-Methods',
//       'GET, POST, OPTIONS, PUT, DELETE'
//    );
//    next();
// });




const express = require('express');
const server = express();
const routes = require('./routes');
const PORT = 3001;

const cors = require("cors");
server.use(cors());

server.use(express.json());
server.use("/rickandmorty", routes);

// Configuración de los encabezados CORS (¡solo una vez!)
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});