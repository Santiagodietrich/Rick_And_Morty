import { Link } from 'react-router-dom';
 import styles from '../Card/Card.module.css'
// import {Button,CardConteiner} from './styled'
export default function Card({name, status, species, gender, origin, image, onClose, id}) {//hacemos destructuring para evitar repetir props.

   return (
      <div className={styles.tarjetas}>
         <button className={styles.boton} onClick={onClose}>X</button>
   <div class={styles.tarjetas}>
   <div class={styles.innerCard}>
    <div class={styles.frontSide}>
      
      </div>
    <div class={styles.backSide}>
     <div className={styles.letras}>
     <Link to={`/deatil/${id}`}><h2>{name}</h2></Link>
         {/* <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2> */}
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

