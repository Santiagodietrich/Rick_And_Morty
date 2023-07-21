
const initialState = {
    myFavorites: [],
    allFavorites:[]
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'ADD_FAV':
            return {
                ...state,
                myFavorites: [...state.allFavorites, actions.payload],
                allFavorites: [...state.allFavorites, actions.payload]
            }
        case 'REMOVE_FAV':
            return {
                ...state,
                myFavorites: state.myFavorites.filter((fav) => fav.id !== actions.payload)
            }
         case 'FILTER_FAV':
            if(actions.payload ==='All'){
                return{...state,myFavorites:[...state.allFavorites]}
            }else{
                const favoritesFilter=state.allFavorites.filter((fav)=>fav.gender === actions.payload)
                return{...state,myFavorites:favoritesFilter}
            }
                 
         case 'ORDER_FAV': 

         const orden=[...state.myFavorites]
         orden.sort((a, b)=>{
            if(actions.payload === 'A'){// los personajes se ordenan de menor a mayor
              return a.id - b.id
            }else{
                return b.id - a.id
            }
         })
            return{
                ...state,
                myFavorites:orden
                
            }


        
        default:
            return state
    }
}

export default reducer