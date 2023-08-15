import { Link } from 'react-router-dom';
 import styles from '../Card/Card.module.css'
import { add_fav, remove_fav } from '../../Redux/actions';
 import {connect} from 'react-redux'
import { useState,useEffect} from 'react';
// import {Button,CardConteiner} from './styled'
export function Card({name, status, species, gender, origin, image, onClose, id,add_fav,remove_fav,favorites}) {//hacemos destructuring para evitar repetir props.

   const [estado,SetEstado]=useState(false)

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            SetEstado(true);
         }
      });
   }, [favorites]);

   function handleFavorite(){
      if(estado === true){
         SetEstado(false)
         remove_fav(id)
      }else if(estado === false){
         SetEstado(true)
         add_fav({name:name,status:status,species:species,gender:gender,origin:origin.name,image:image,onClose:onClose,id:id})
      }
   }



   return (
      <div className={styles.tarjetas}>
      {
      estado ? (
       <button className={styles.bota} onClick={handleFavorite}>❤️</button>
      ) : (
       <button className={styles.bota} onClick={handleFavorite}>🤍</button>
      )
      }
      <button className={styles.boton} onClick={onClose}>X</button>
        <div class={styles.tarjetas}>
         <div class={styles.innerCard}>
         <div class={styles.frontSide}>
      
      </div>
      <div class={styles.backSide}>
      <div className={styles.letras}>
      <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         {/* <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2> */}
         <h2>{id}</h2>
         </div>
         <div className={styles.img}>
         <img src={image} alt={`No se encuentra la imagen de ${name}`} />
         </div>
         </div> 
         </div>
         </div>
         </div>     
      );

}
function mapDispatchToProps(dispatch){

   return{ add_fav:(personaje) =>
      dispatch(add_fav(personaje)),
      remove_fav:(id)=>
      dispatch(remove_fav(id))
   }
}

function mapStateToProps(estado){
   return {favorites:estado.myFavorites}

}



export default connect(mapStateToProps,mapDispatchToProps)(Card)