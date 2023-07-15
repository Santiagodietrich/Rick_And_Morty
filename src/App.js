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
   function login(userData){
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
         navigate('/home')
      }

     


   }
    function logOut(){
         setAccess(false);
         navigate("/")
      }


   function onSearch(id) {
      if(id<826) {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               const antiRep=characters.find((characters)=>characters.id === data.id)//arrow function para que no se repitan las cards cuando llamemos por id
                                                                                    //metodo find(),encuentra cualquier elemento dentro de un array
               if(!antiRep){
                  setCharacters((characters) => [...characters, data]);
               }else{
                  window.alert('¡El personaje ya ha sido seleccionado!')
               }
               
               
            }
         });
       }else {
         window.alert('¡No hay personajes con este ID!');
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
       <Route path='/deatil/:id'element={<Detail/>}/>
       <Route path="" element={<error/>}/>
      </Routes>
        
      </div> 
   );  
   }

export default App ;
