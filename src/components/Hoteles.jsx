import { useNavigate } from "react-router-dom";

export const Hoteles = () => {

  // const [nombre, setCorreo] = useState("");
  // const [direccion, setDireccion] = useState("");
  // const [precioHabitacion, setHabitacion] = useState("");
  // const [habitacionesDispo, setHabitacionDispo] = useState("");


  // const navigate = useNavigate();

  // const handleHome = async (event) => {
  //   event.preventDefault();
  //   const resultado = await apiH(nombre, direccion, precioHabitacion, habitacionesDispo);
  //   if (resultado === false) return null;
  // }

  const navigate = useNavigate();

    const handleAddHotel = () => {
    //console.log('vamonos al login');
    navigate('/reservacion');
  }


  return (
    <>
      <div>
        <div id="titulo-hoteles" className="container">
        <div className="row">
          <h1>Hoteles</h1>
        </div>

        </div>
        <div className="container-card">
          <div className="card">
            <div className="contenido-card">
              <h3>Conquistador Hotel y Conference Center</h3>
              <p>Contamos con 151 habitaciones con aire acondicionado y acceso a internet. Ofrecemos grandes espacios para eventos sociales de 10 a 700 personas.</p>
              <p>Habitaciones: 151</p>
              <button onClick={handleAddHotel} >Reserva ya! </button> 
            </div>
          </div>
          <div className="card">
            <div className="contenido-card">
              <h3>Hotel Clarion Suites </h3>
              <p>El Clarion Suites Guatemala está ubicado en el popular distrito de Zona Viva y ofrece gimnasio,
                aparcamiento gratuito y suites elegantes con aire acondicionado.</p>
                <p>Habitaciones: 121</p>
                <button onClick={handleAddHotel} >Reserva ya! </button> 
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="container-card">
          <div className="card">
            <div className="contenido-card">
              <h3>Hostal Villa Toscana</h3>
              <p>El Hostal Villa Toscana, ideal para turistas locales y extranjeros, misioneros, sin fines de lucro,
                familias y grupos de negocios, se encuentra en la ciudad de Guatemala</p>
                <p>Habitaciones: 130</p>
                <button onClick={handleAddHotel} >Reserva ya! </button> 
            </div>
          </div>
          <div className="card">
            <div className="contenido-card">
              <h3>Holiday Inn Guatemala</h3>
              <p>El Holiday Inn está ubicado en el distrito Zona 10 de Guatemala y ofrece WiFi gratuita y piscina
                al aire libre. También alberga un centro de fitness.</p>
                <p>Habitaciones: 200</p>
                <button onClick={handleAddHotel} >Reserva ya! </button> 
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="container-card">
          <div className="card">
            <div className="contenido-card">
              <h3>Conquistador Hotel y Conference Center</h3>
              <p>El Conquistador Hotel & Conference Center se encuentra a 190 metros de la estación de metro Plaza
                de la República y a 100 metros del centro comercial Plaza Quo.</p>
                <p>Habitaciones: 170</p>
                <button onClick={handleAddHotel} >Reserva ya! </button> 
            </div>
          </div>
          <div className="card">
            <div className="contenido-card">
              <h3>Hotel Clarion Suites </h3>
              <p>El Clarion Suites Guatemala está ubicado en el popular distrito de Zona Viva y ofrece gimnasio,
                aparcamiento gratuito y suites elegantes con aire acondicionado.</p>
                <p>Habitaciones: 190</p>
                <button onClick={handleAddHotel} >Reserva ya! </button> 
            </div>
          </div>
        </div>
        <br />
        <br />

      </div>
    </>
  )
}

