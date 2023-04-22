import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {

    //Destructuracion
    //const {colorPrimario,colorSecundario,titulo} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const obj = {
        backgroundColor: hexToRgba(props.datos.colorPrimario,0.6)
    }

    //Devolver con condicion

    return <>
        {
            colaboradores.length > 0 && 
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    value={props.datos.colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value,props.datos.id)
                    }}
                />
                <h3 style={{borderColor:props.datos.colorPrimario}}>{props.datos.titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador,index) => <Colaborador 
                                                                datos={colaborador} 
                                                                key={index}
                                                                colorPrimario={props.datos.colorPrimario}
                                                                eliminarColaborador={eliminarColaborador}
                                                                like={like}
                                                                />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo