import SearchBar from "../SearchBar/SearchBar"
import styles from "../nav/Nav.module.css"
import { Link } from "react-router-dom"


export default function Nav ({onSearch, aleatxrix}){
    return(
        <nav >
            <SearchBar onSearch={onSearch}></SearchBar>
            <button className={styles.button} onClick={aleatxrix}></button>
            <Link to="/about">
                <button className={styles.bot}>About</button>
            </Link>
            <Link to="/home">
                <button className={styles.boton}>Home</button>
            </Link>
            <Link to="/">
            <button className={styles.bo}>Log out</button>
            </Link>
            <Link to='/favorites'>
                <button className={styles.bota}>Favoritos</button>
            </Link>
        </nav>
    )
}

