import styles from "../App.module.css"
import { BuyButton } from "./Buttons";

type Props = {
    img: string;
    text: string;
}

export const ItemInfo = ({img, text}: Props) => {
    return(
        <div className={styles.mainProductArea}>
            <div className={styles.product}>
                <div className={styles.leftArea}>
                    <img src={img}/>    
                </div>

                <div className={styles.rightArea}>
                    
                    <div>
                    {text}
                    </div>
                    <BuyButton
                    label="Comprar"
                    />
                    
                </div>
            </div>
        </div>
    );
}