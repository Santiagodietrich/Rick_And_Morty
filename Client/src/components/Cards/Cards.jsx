import Card from '../Card/Card.jsx';
import style from '../Cards/Cards.module.css';

export default function Cards({characters,onClose}) {
   return <div className={style.FlexContainer}>
      {characters.map(element =>
         <Card
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            onClose={()=>onClose(element.id)}//llamamos a la funcion
         />)}
   </div>;
}
