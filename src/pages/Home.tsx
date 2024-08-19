import { useState } from "react";
import styles from "../App.module.css"
import { ItemCard } from "../components/Item";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";


import { items } from "../helpers/item";

export const Home = () => {

    
    const hello = () => {
        console.log("Hello World");
    }
    return(
        <div className={styles.bodyArea}>
            <Header/>
            <main className={styles.mainGrid}>
                {items.map(i => (
                    <Link to="/item" className={styles.infoLink}>
                        <ItemCard key={i.id}
                        onClick={hello}
                        img={i.img}
                        name={i.name}
                        newPrice={i.newPrice}
                        price={i.price}
                        />
                    </Link>
                    
                ))}
            </main>
        </div>
    );
}