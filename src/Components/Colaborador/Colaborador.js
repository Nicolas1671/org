import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => props.eliminarColaborador(props.datos.id)} />
        <div className="encabezado" style={{backgroundColor:props.colorPrimario}}>
            <img src={props.datos.foto} alt="foto colaborador" />
        </div>
        <div className="info">
            <h4>{props.datos.nombre}</h4>
            <h5>{props.datos.puesto}</h5>
            {props.datos.fav ? <AiFillHeart color="red" onClick={() => props.like(props.datos.id)}/> : 
            <AiOutlineHeart onClick={() => props.like(props.datos.id)}/>}
        </div>
    </div>
}

export default Colaborador

/* 
    https://github.com/harlandlohora.png

    https://github.com/genesysaluralatam.png

    https://github.com/JeanmarieAluraLatam.png

    https://github.com/christianpva.png

    https://github.com/JoseDarioGonzalezCha.png
*/
