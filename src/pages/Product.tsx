import { ItemInfo } from "../components/ItemInfo";



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