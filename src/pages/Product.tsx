import styles from "../App.module.css"
import process from "../assets/100-processador.jpg";
import { ItemInfo } from "../components/ItemInfo";
import { items } from "../helpers/item";


export const Product = () => {
    return(
       <div>
        {items.map(i => (
            <ItemInfo
            text={i.name}
            img={i.img}
           />
        ))}
       </div>
    );
}