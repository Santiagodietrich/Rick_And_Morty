import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "../detail/Detail.module.css"



export default function Deatil (){ 
    const {id}=useParams();
    const [character,setCharacter]=useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(

        <div>
  {character.name && (

     <div className={styles.card}>
    <div className={styles.circle}></div>
    <div className={styles.circle}></div>
    <div className={styles.inner}></div>
    
   
    <div className={styles.carta}>
      <h2>{character.name}</h2>
      <p><b>Status:</b> {character.status}</p>
      <p><b>Species:</b> {character.species}</p>
      <p><b>Gender:</b> {character.gender}</p>
      <p><b>Origin:</b> {character.origin.name}</p>
      <img src={character.image} alt='Image Not Found' className={styles.img} />
      
    </div>
    </div>
    )}
    </div>
    )

};




