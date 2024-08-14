import { ReactNode, useState } from "react";
import styles from "../App.module.css"



export const Header = ({children}: {children: ReactNode}) => {

    return(
        <header className={styles.headerArea}>
            {children}   
        </header>
    );
}