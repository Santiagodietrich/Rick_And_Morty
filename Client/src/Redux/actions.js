import axios from "axios";
export const ADD_FAV="ADD_FAV";
export const REMOVE_FAV="REMOVE_FAV";
export const FILTER_FAV="FILTER_FAV";
export const ORDER_FAV="ORDER_FAV";
 


export const add_fav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   try{
      return async (dispatch) => {
         const {data}= await axios.post(endpoint, character)
            return dispatch({
               type: ADD_FAV,
               payload: data,
         });
      };
   }catch(error){
      console.error(error.message)
   }
   
};

// export const remove_fav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     try{return async (dispatch) => {
//        const {data}= await axios.delete(endpoint)
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//        });
//     };
//     }catch(error){
//       console.log({error:"error al borrar una card"})
//     }
    
//  };


export const remove_fav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint);
         dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (error) {
         console.error('Error al borrar una tarjeta:', error);
         // Puedes despachar otra acción aquí para manejar el error en el estado si es necesario
      }
   };
};



export const filter_fav=(gender)=>{
    return{type:FILTER_FAV,payload:gender}

}
export const order_fav=(order)=>{
    return{type:ORDER_FAV,payload:order}

}
