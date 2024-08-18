import { ReactNode, useState } from "react";
import styles from "../App.module.css"
import { Link } from "react-router-dom";
import { CarButton, MenuButton } from "./Buttons";


export const Header = () => {

    const [menu, setMenu] = useState(false);

    const handleToggleButton = () => {
      setMenu(!menu);
    }


    return(
        <div>
            <header className={styles.headerArea}>
                <MenuButton label="Nossos Departamentos" onClick={handleToggleButton}/>
                    <h1>Pichel</h1>
                <CarButton label="Carrinho"/>
            </header>

            <nav className={`${menu ? styles.menuArea : styles.menuAreaActive}`}>
                <ul>
                    <li><Link className={styles.link} to="/">Hardwares</Link></li>
                </ul>

                <ul>
                    <li><Link className={styles.link} to="/">Periféricos</Link></li>
                </ul>
                <ul>
                    
                    <li><Link className={styles.link} to="/">Monitores</Link></li>
                </ul>

                <ul>
                    <li><Link className={styles.link} to="/">Hardwares</Link></li>
                </ul>
                <ul>
                    <li><Link className={styles.link} to="/">Hardwares</Link></li>
                </ul>
                <ul>
                    <li><Link className={styles.link} to="/">Hardwares</Link></li>
                </ul>
                <ul>
                    <li><Link className={styles.link} to="/">Hardwares</Link></li>
                </ul>
                <ul>
                    <li><Link className={styles.link} to="/">Hardwares</Link></li>
                </ul>
            </nav>
        </div>
    );
}