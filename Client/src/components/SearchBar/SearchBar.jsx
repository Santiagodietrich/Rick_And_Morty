import { useState } from 'react';
import styles from '../SearchBar/SearchBar.module.css';

export default function SearchBar({onSearch}) {
   const [id,setId]=useState("")//[estado,actualizacion del estado]=estado inicial
   const handleChange= (event) =>{
      let value=event.target.value //captura el valor ingresado,evento, y lo trae
      setId(value)//actualiza tomando el nuevo valor (value)
   }
   return (
      
      
      <div>
         <input placeholder="Enter your text..." className={styles.input} onChange={handleChange} value={id} name="text" type="text"></input>
         <button className={styles.button} onClick={()=> onSearch(id)}>Agregar</button>
         

         
      </div>
   );
}

//OTRA FORMA//////////////////////////////////////////////////////////////////////////////

// export default function SearchBar(props) {
//    return (
//       <div>
//          <input type='search' />
//          <button onClick={props.onSearch}>Agregar</button>
//       </div>
//    );
// }
