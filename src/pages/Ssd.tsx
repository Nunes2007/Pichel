import { ItemInfo } from "../components/ItemInfo";
import ssd from "../assets/ssd.jpg"


export const Ssd = () => {
    return(
       <ItemInfo
        text="SSD Adata Legend 710, 512GB, M.2 2280, PCIe NVMe, Leitura 2400 MB/s, Gravacao 1600 MB/s, ALEG-710-512GCS"
        img={ssd}
       />
    );
}