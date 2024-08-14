import styles from "../App.module.css"
import { Item } from "../types/item";


export const ItemCard = ({name, img, price, id}: Item ) => {
    return(
        <div key={id} className={styles.item}>
            <img src={img} alt="" />
            <p className={styles.info}>{name}</p>
            <p><span>{price}</span></p>
        </div>
    );
}