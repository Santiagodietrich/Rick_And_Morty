
import axios from 'axios'; // Asegúrate de importar axios si lo estás utilizando
const initialState = {
       myFavorites: [],
         allFavorites:[]
     }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, allFavorites: action.payload };
            case 'REMOVE_FAV':
                return { ...state, allFavorites: action.payload, myFavorites: action.payload};
        case 'FILTER_FAV':
            if (action.payload === 'All') {
                return { ...state, myFavorites: [...state.allFavorites] };
            } else {
                const favoritesFilter = state.allFavorites.filter((fav) => fav.gender === action.payload);
                return { ...state, myFavorites: favoritesFilter };
            }
        case 'ORDER_FAV':
            const orden = [...state.myFavorites];
            orden.sort((a, b) => {
                if (action.payload === 'A') {
                    return a.id - b.id;
                } else {
                    return b.id - a.id;
                }
            });
            return { ...state, myFavorites: orden };
        default:
            return state;
    }
};

export default reducer;
