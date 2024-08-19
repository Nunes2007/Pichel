import process from "../assets/100-processador.jpg"
import phone from "../assets/fone.jpg"
import fonte from "../assets/fonte.jpg"
import cooler from "../assets/cooler.jpg"
import ssd from "../assets/ssd.jpg"
import keyboard from "../assets/teclado.jpg"


export type Item = {
    id?: number;
    name: string;
    img: string;
    newPrice: string;
    price: string;
    onClick?: () => void;
    link?: string;
}

export const items: Item[] = [
    {
        id: 1, 
        name: 'Processador AMD Ryzen 5 5600, 6-Core, 12-Threads, 3.5GHz (4.4GHz Turbo), Cache 35MB, AM4, 100-100000927BOX', 
        price: "2.199,99",
        newPrice: "850,00",
        img: process
    }, 
    {   
        id: 2,
        name: 'Headset Gamer Razer Blackshark V2 X Multiplataforma Preto, RZ04-03240100-R3U1', 
        price: "705,87",
        newPrice: "249,99",
        img: phone
    },

    { 
        id:3,
        name: 'Fonte Galax Omega GLX850, 850W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Gold, PGO85GPTNAFB0', 
        price: "705,87",
        newPrice: "249,99",
        img: fonte
    }, 

    { 
        id: 4,
        name: 'Water Cooler Cooler Master MasterLiquid 360L Core, ARGB, 360mm, Preto, MLW-D36M-A18PZ-R', 
        price: "705,87",
        newPrice: "249,99",
        img: cooler
    }, 

    { 
        id: 5,
        name: 'Water Cooler Cooler Master MasterLiquid 360L Core, ARGB, 360mm, Preto, MLW-D36M-A18PZ-R', 
        price: "705,87",
        newPrice: "249,99",
        img: cooler
    }, 

    { 
        id: 6,
        name: 'Water Cooler Cooler Master MasterLiquid 360L Core, ARGB, 360mm, Preto, MLW-D36M-A18PZ-R', 
        price: "705,87",
        newPrice: "249,99",
        img: cooler
    },

    { 
        id: 7,
        name: 'SSD Adata Legend 710, 512GB, M.2 2280, PCIe NVMe, Leitura 2400 MB/s, Gravacao 1600 MB/s, ALEG-710-512GCS', 
        price: "705,87",
        newPrice: "249,99",
        img: ssd
    },

    { 
        id: 8,
        name: 'Teclado Mecanico Redragon Lakshmi, Rainbow, ABNT2, Layout 60%, Switch Marrom, K606R-PT-BROWN', 
        price: "705,87",
        newPrice: "249,99",
        img: keyboard
    }, 

    
]