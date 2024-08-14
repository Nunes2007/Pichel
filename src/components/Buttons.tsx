import styles from "../App.module.css";


type Props = {
    label: string;
    onClick?: () => void;
}


export const MenuButton = ({label, onClick}: Props) => {
    return(
        <button onClick={onClick} className={styles.menuButton}>{label}</button>
    );
}

export const CarButton = ({label}: Props) => {
    return(
        <button className={styles.carButton}>{label}</button>
    );
}

export const BuyButton = ({label}: Props) => {
    return(
        <button className={styles.buyButton}>{label}</button>
    );
}