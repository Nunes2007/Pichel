import { useState } from "react";
import styles from "../App.module.css"
import { ItemCard } from "../components/Item";
import { Header } from "../components/Header";
import { CarButton, MenuButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import process from "../assets/100-processador.jpg"
import phone from "../assets/fone.jpg"
import fonte from "../assets/fonte.jpg"
import cooler from "../assets/cooler.jpg"
import ssd from "../assets/ssd.jpg"
import teclado from "../assets/teclado.jpg"

export const Home = () => {

    const [menu, setMenu] = useState(false);

    const handleToggleButton = () => {
      setMenu(!menu);
    }

    return(
        <div className={styles.bodyArea}>

            <div className={styles.head}>
                <Header>
                    <MenuButton label="Nossos Departamentos" onClick={handleToggleButton}/>
                    <h1>Pichel</h1>
                    <CarButton label="Carrinho"/>
                </Header>

        
                <nav className={`${menu ? styles.menuArea : styles.menuAreaActive}`}>
                    <ul>
                        <li><Link className={styles.link} to="/Home">Hardwares</Link></li>
                    </ul>
                    
                    <ul>
                        <li><Link className={styles.link} to="/Home">Periféricos</Link></li>
                    </ul>
                    <ul>
                        
                        <li><Link className={styles.link} to="/Home">Monitores</Link></li>
                    </ul>

                    <ul>
                        <li><Link className={styles.link} to="/Home">Hardwares</Link></li>
                    </ul>
                </nav>
            </div>

            
            <main className={styles.mainGrid}>
                <Link to="/process">
                <ItemCard
                name="Processador AMD Ryzen 5 5600, 6-Core, 12-Threads, 3.5GHz (4.4GHz Turbo), Cache 35MB, AM4, 100-100000927BOX"
                price="R$ 850,00"
                img={process}
                />
                </Link>
                <Link to="/phone">
                <ItemCard
                name="Headset Gamer Razer Blackshark V2 X Multiplataforma Preto, RZ04-03240100-R3U1"
                price="R$ 249,99"
                img={phone}
                />
                </Link>
                <Link to="/font">
                <ItemCard
                name="Fonte Galax Omega GLX850, 850W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Gold, PGO85GPTNAFB0"
                price="R$ 649,99"
                img={fonte}
                />
                </Link>
                <Link to="/cooler">
                <ItemCard
                name="Water Cooler Cooler Master MasterLiquid 360L Core, ARGB, 360mm, Preto, MLW-D36M-A18PZ-R1"
                price="R$ 529,99"
                img={cooler}
                />
                </Link>
                <Link to="/cooler">
                <ItemCard
                name="Water Cooler Cooler Master MasterLiquid 360L Core, ARGB, 360mm, Preto, MLW-D36M-A18PZ-R1"
                price="R$ 529,99"
                img={cooler}
                />
                </Link>
                <Link to="/cooler">
                
                <ItemCard
                name="Water Cooler Cooler Master MasterLiquid 360L Core, ARGB, 360mm, Preto, MLW-D36M-A18PZ-R1"
                price="R$ 529,99"
                img={cooler}
                />
                </Link>
                <Link to="/ssd">
                <ItemCard
                name="SSD Adata Legend 710, 512GB, M.2 2280, PCIe NVMe, Leitura 2400 MB/s, Gravacao 1600 MB/s, ALEG-710-512GCS"
                price="R$ 209,99"
                img={ssd}
                />
                </Link>
                <Link to="/keyboard">
                <ItemCard
                name="Teclado Mecanico Redragon Lakshmi, Rainbow, ABNT2, Layout 60%, Switch Marrom, K606R-PT-BROWN"
                price="R$ 133,99"
                img={teclado}
                />
                </Link>
            </main>
        </div>
    );
}