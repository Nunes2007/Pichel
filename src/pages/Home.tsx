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
    return(
        <div className={styles.bodyArea}>

            
            <Header/>

            
            <main className={styles.mainGrid}>
                <Link to="/process" className={styles.infoLink}>
                <ItemCard
                name="Processador AMD Ryzen 5 5600, 6-Core, 12-Threads, 3.5GHz (4.4GHz Turbo), Cache 35MB, AM4, 100-100000927BOX"
                price="2.199,99"
                newPrice="850,00"
                img={process}
                />
                </Link>

                <Link to="/phone" className={styles.infoLink}>
                <ItemCard
                name="Headset Gamer Razer Blackshark V2 X Multiplataforma Preto, RZ04-03240100-R3U1"
                price="705,87"
                newPrice="249,99"
                img={phone}
                />
                </Link>
                <Link to="/font" className={styles.infoLink}>
                <ItemCard
                name="Fonte Galax Omega GLX850, 850W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Gold, PGO85GPTNAFB0"
                price="1.149,99"
                newPrice="600,00"
                img={fonte}
                />
                </Link>
                <Link to="/cooler" className={styles.infoLink}>
                <ItemCard
                name="Water Cooler Cooler Master MasterLiquid 360L Core, ARGB, 360mm, Preto, MLW-D36M-A18PZ-R1"
                price="1.049,99"
                newPrice="530,00"
                img={cooler}
                />
                </Link>
                <Link to="/cooler" className={styles.infoLink}>
                <ItemCard
                name="Water Cooler Cooler Master MasterLiquid 360L Core, ARGB, 360mm, Preto, MLW-D36M-A18PZ-R1"
                price="1.049,99"
                newPrice="530,00"
                img={cooler}
                />
                </Link>
                <Link to="/cooler" className={styles.infoLink}>
                
                <ItemCard
                name="Water Cooler Cooler Master MasterLiquid 360L Core, ARGB, 360mm, Preto, MLW-D36M-A18PZ-R1"
                price="1.049,99"
                newPrice="530,00"
                img={cooler}
                />
                </Link>
                <Link to="/ssd" className={styles.infoLink}>
                <ItemCard
                name="SSD Adata Legend 710, 512GB, M.2 2280, PCIe NVMe, Leitura 2400 MB/s, Gravacao 1600 MB/s, ALEG-710-512GCS"
                price="350,00"
                newPrice="210,00"
                img={ssd}
                />
                </Link>
                <Link to="/keyboard" className={styles.infoLink}>
                <ItemCard
                name="Teclado Mecanico Redragon Lakshmi, Rainbow, ABNT2, Layout 60%, Switch Marrom, K606R-PT-BROWN"
                price="249,99"
                newPrice="130,00"
                img={teclado}
                />
                </Link>
            </main>
        </div>
    );
}