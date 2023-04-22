import "./MiOrg.css"
import { useState } from "react"

const MiOrg = (props) => {
    //Estado - Hooks
    //useState
    //useState()
    // const [nombreVariable,funcionActualiza] = useState (valorInicial)
    // const [nombre, actualizarNombre] = useState ()

    //const [mostrar,actualizarMostrar] = useState(true)

    //const manejarClick = () => {
        //console.log(mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg