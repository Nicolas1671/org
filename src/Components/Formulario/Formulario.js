import "./Formulario.css";
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";
import { useState } from "react";

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState ("")
    const [puesto,actualizarPuesto] = useState ("")
    const [foto,actualizarFoto] = useState ("")
    const [equipo,actualizarEquipo] = useState ("")

    const [titulo,actualizarTitulo] = useState ("")
    const [color,actualizarColor] = useState ("")

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        console.log(evento)
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        console.log (datosAEnviar)
        props.registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault()
        props.crearEquipo({titulo: titulo,colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre"    
                placeholder="Ingresar Nombre" 
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar Foto" 
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
                />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo 
                titulo="Titulo"    
                placeholder="Ingresar Titulo" 
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Exadecimal" 
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>   
}

export default Formulario

