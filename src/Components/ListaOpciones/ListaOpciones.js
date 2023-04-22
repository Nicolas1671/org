import "./ListaOpciones.css";

const ListaOpciones = (props) => { 

    /* Metodo Map -> arreglo.map ((equipo,index) => {
        retur <option>{variable}</option>
    })*/

    const manejarCambio = (evento) => {
        props.actualizarEquipo(evento.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo...</option>
            {props.equipos.map((equipo,index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones