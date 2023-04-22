import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
    //const [valor,actualizarValor] = useState("Harland")
    const placeholderMod = `${props.placeholder}...`

    //Destructuracion
    const { type = "text"} = props

    const manejarCambio = (evento) => {
        props.actualizarValor(evento.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderMod} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo
