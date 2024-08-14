import styles from "../App.module.css"
import process from "../assets/100-processador.jpg";
import { BuyButton } from "../components/Buttons";
import { ItemInfo } from "../components/ItemInfo";


export const Process = () => {
    return(
       <ItemInfo
        text="Processador AMD Ryzen 5 5600, 6-Core, 12-Threads, 3.5GHz (4.4GHz Turbo), Cache 35MB, AM4, 100-100000927BOX"
        img={process}
       />
    );
}