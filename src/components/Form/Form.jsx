import { useState } from "react"
import validation from "./validation"
import  styles  from "../Form/Form.module.css"

export default function Form ({login}){
    const [userData, setuserData]= useState({
        email:'',
        password:''
    })

    const [errors, setErrors]=useState({ email:'', password:''})

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setErrors(validation({ ...userData, [property]: value }));
        setuserData({ ...userData, [property]: value });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        login(userData)
    }

    return(
    // <form onSubmit={handleSubmit}>
    //     <div>
    //     <label htmlFor="email">Email</label>
    //     <input type="text" name="email" value={userData.email} onChange={handleChange} />
    //     <p>{errors.email}</p>
    //     </div>
    //     <div>
    //         <label htmlFor="password">Password</label>
    //         <input type="password" name="password" value={userData.password} onChange={handleChange} />
    //         <p>{errors.password}</p>
    //     </div>
    //     <button type="submit">Login</button>
    // </form>




<div className={styles.box}>
 
 <form onSubmit={handleSubmit}>
   <div className={styles.box}>
     <input type="text" name="email" value={userData.email} onChange={handleChange}/>
     <span className={styles.highlightSpan}>{errors.email}</span>
     <label htmlFor="email">Email</label>
   </div>
   <div className={styles.box}>
     <input type="password" name="password" value={userData.password} onChange={handleChange} />
     <span className={styles.highlightSpan}>{errors.password}</span>
     <label htmlFor="password" >Password</label>
   </div>
   <button className={styles.boton} type="submit">Login</button>
   {/* <center>
     <a href="#">
          Submit
      <span></span>
   </a></center>  */}
 </form>
</div>



    )
}

