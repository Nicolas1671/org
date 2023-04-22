
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './Components/Header/Header.js';
import Formulario from './Components/Formulario/Formulario.js';
import MiOrg from './Components/MiOrg/MiOrg';
import Equipo from './Components/Equipo/Equipo';
import Footer from './Components/Footer/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])
  const [equipos, actualizarEquipos] = useState ([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador 

  const registrarColaborador = (colaborador) => {
    //Spread Operator
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //Eliminar Colaborador

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => { 
                                                          return colaborador.id !== id
                                                        })
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar Color de Equipo

  const actualizarColor = (color,id) => {
    const equiposactializados = equipos.map ((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposactializados)
  }

  //Crear Equipos

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos ([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  // Favorito

  const like = (id) => {
    const colaboradorlike = colaboradores.map ((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradorlike)
  }

  //Lista de equipos 

  /*const equipos = [
    {
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ];*/

  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario 
                                      equipos={equipos.map((equipo) => equipo.titulo)}
                                      registrarColaborador={registrarColaborador}
                                      crearEquipo={crearEquipo}
                                      /> : <div></div> /*<></>*/}

      {/*mostrarFormulario && <Formulario />*/}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo) => {
          return <Equipo 
                    datos={equipo} 
                    key={equipo.titulo} 
                    colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                    eliminarColaborador={eliminarColaborador}
                    actualizarColor={actualizarColor}
                    like={like}
                    />
        })
      }
      <Footer/>
    </div>
  );
}

export default App;
