import styles from "../App.module.css"
import { Item } from "../helpers/item";
import { Link } from "react-router-dom";

export const ItemCard = ({name, img, price, newPrice, onClick}: Item ) => {
    return(
        <div className={styles.item} onClick={onClick} >
            <div className={styles.imageArea}>
                <img src={img}/>
            </div>

            <div className={styles.inforArea}>
                <p className={styles.infoItem}>{name}</p>
                <p className={styles.info}>de <span>R$ {price}</span> por:</p>
            </div>

            <div className={styles.newPriceArea}>
                <span>à vista</span>
                <p>R$ {newPrice}</p>
                <div className={styles.pixValue}>
                    <p className={styles.discount}>no PIX com 15% de desconto</p>
                    <div className={styles.line}></div>
                    <span>R$ 1.058,99</span>
                    <p>em até 12x de <span>R$ 88,50</span> sem juros no cartão</p>
                </div>
            </div>
        </div>
    );
}