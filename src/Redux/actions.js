export const ADD_FAV="ADD_FAV";
export const REMOVE_FAV="REMOVE_FAV";
export const FILTER_FAV="FILTER_FAV";
export const ORDER_FAV="ORDER_FAV";


export const add_fav=(personaje)=>{
    return {type:ADD_FAV,payload:personaje}
}

export const remove_fav=(id)=>{
    return {type:REMOVE_FAV,payload:id}
}

export const filter_fav=(gender)=>{
    return{type:FILTER_FAV,payload:gender}

}
export const order_fav=(order)=>{
    return{type:ORDER_FAV,payload:order}

}
