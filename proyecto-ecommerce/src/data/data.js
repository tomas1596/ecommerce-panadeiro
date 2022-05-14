import img1 from "../components/assets/img/ena-1.jpg"
import img2 from "../components/assets/img/ena-2.jpg"
import img3 from "../components/assets/img/ena-3.jpg"
import img4 from "../components/assets/img/creatina-1.jpg"
import img5 from "../components/assets/img/creatina-2.jpg"
import img6 from "../components/assets/img/creatina-3.jpg"
import img7 from "../components/assets/img/pre-1.jpg"
import img8 from "../components/assets/img/pre-2.jpg"
import img9 from "../components/assets/img/pre-3.png"


export const productos = [
    { id: "1", category:"proteina", name: "ENA Whey Protein", description: "Proteina", price: "$3000", img:img1, stock:3},
    { id: "2", category:"proteina", name: "ENA Whey Protein X Pro", description: "Proteina", price: "$3500", img:img2, stock:4},
    { id: "3", category:"proteina", name: "ENA Whey Protein Complex", description: "Proteina", price: "$4000", img:img3, stock:5},
    { id: "4", category:"creatina", name: "Star", description: "Creatina", price: "$6000", img:img4, stock:5},
    { id: "5", category:"creatina", name: "Growth", description: "Creatina", price: "$2500", img:img5, stock:4},
    { id: "6", category:"creatina", name: "Universal", description: "Creatina", price: "$9000", img:img6, stock:6},
    { id: "7", category:"preentreno", name: "C4 Extreme", description: "Pre Workout", price: "$12000", img:img7, stock:7},
    { id: "8", category:"preentreno", name: "C4 Ultimate", description: "Pre Workout", price: "$15000", img:img8, stock:5},
    { id: "9", category:"preentreno", name: "Pump V8", description: "Pre Workout", price: "$3000", img:img9, stock:4},
];

export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? productos.find(producto => producto.id === id) : productos
            resolve(query)
        }, 1000)
    })
}