import './App.css';
import Cards from './components/Cards/Cards.jsx';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './components/nav/Nav1';
import { Route,Routes,useLocation, useNavigate } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/Form/Form.jsx';
import error from './components/Error/error';
import Favorites from './components/Favorites/Favorites'



function App() {
   


   const [characters ,setCharacters]=useState([]) //hacemos el estado y su actualizacion, usando destructuring
   const navigate=useNavigate()
   const [access,setAccess]=useState(false);
    const EMAIL='santiagodietrich@hotmail.com'
    const PASSWORD='Necochea22'

   useEffect(()=>{
      !access && navigate('/');
   },[access]
   )
   async function login(userData) {
      try{const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data}= await axios(`${URL}?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      ;

      }catch(error){
         console.log({error:"usuario o contraseña incorrectos"})
      }
      
   }
    function logOut(){
         setAccess(false);
         navigate("/")
      }


   async function onSearch(id) {
      try{if(id<826) {
        const {data}= await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            if (data.name) {
               const antiRep=characters.find((characters)=>characters.id === data.id)//arrow function para que no se repitan las cards cuando llamemos por id
                                                                                    //metodo find(),encuentra cualquier elemento dentro de un array
               if(!antiRep){
                  setCharacters((characters) => [...characters, data]);
               }else{
                  window.alert('¡El personaje ya ha sido seleccionado!')
               }
               
               
            }else{
               window.alert('¡No hay personajes con este ID!')
            }
         ;
       }
      }catch(error){
          window.alert(error.response.data)
      }
   }
   function aleatxrix() {
      
         const aleatorio= Math.floor(Math.random() * 826) + 1//math transforma el id  en un numero aleatorio que debe generar hasta el 826 + 1 ,porque 826 es excluyente(no lo toma)
         axios(`https://rickandmortyapi.com/api/character/${aleatorio}`).then(({ data }) => {
            if (data.name) {
               const antiRep=characters.find((characters)=>characters.id === data.id)
               if(!antiRep){
                  setCharacters((characters) => [...characters, data]);
               }else{
                  window.alert('¡El personaje ya ha sido seleccionado!')
               }
               
               
            }
         });
      
   }
   
   function onClose (id){
      setCharacters(characters.filter((characters)=> characters.id !== id))//filtra y compara si el id ingresado es distinto del id de characters
      
   }
   
      const location=useLocation()
      



   return (
      <div className='App'>
         {location.pathname!=="/" && <Nav onSearch={onSearch} aleatxrix={aleatxrix} logOut={logOut}/>}
         
      <Routes>
       <Route path='/'element={<Form login={login}/>}/>
       <Route path='/home'element={<Cards characters={characters} onClose={onClose}/>}/>
       <Route path='/about'element={<About/>}/>
       <Route path='/detail/:id'element={<Detail/>}/>
       <Route path="" element={<error/>}/>
       <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
        
      </div> 
   );  
   }

export default App ;
