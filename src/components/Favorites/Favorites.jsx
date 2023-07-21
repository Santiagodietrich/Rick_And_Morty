import Card from "../Card/Card"
import {connect, useDispatch} from "react-redux"
import styles from "../Favorites/Favorites.module.css"
import {filter_fav,order_fav } from "../../Redux/actions"
import { useState } from "react"



export function Favorites({myFavorites}) {

  const [aux, setAux]=useState(false)



  const dispatch=useDispatch()

    function handleOrder(e){
      dispatch(order_fav(e.target.value))
      setAux(!aux)
    }

    function handleFilter(e){
      dispatch(filter_fav(e.target.value))
    }
    return(
      <>
      <select onChange={handleOrder}>
      <option value="A">Ascendente</option>
      <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">Unknown</option>
      <option value="All">All</option>
      </select>

      <div className={styles.FlexContainer}>
        {myFavorites.length === 0 ? (
          <p className={styles.palabra}>
            ¡Agrega un favorito!
          </p>
        ) : (
          myFavorites.map((e, i) => (
            <Card
              id={e.id}
              name={e.name}
              species={e.species}
              gender={e.gender}
              image={e.image}
              onClose={false}
              fav={true}
              key={i++}
            />
          )
          )
        )}
      </div>
      </>
    )

    

}
 
function mapStateToProps(estado){

    return {myFavorites:estado.myFavorites}

}
export default connect(mapStateToProps)(Favorites)