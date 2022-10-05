import { NavBar, Gallery } from "../exports";


const Banner = () => {
  return (
    <div className="banner" id="home">
      <NavBar />

      <h3>EXPERTOS EN CORTINAS METALICAS</h3>
      <span>¡Observa nuestros <a href="#services">Servicios</a>!</span>

      <Gallery />
    </div>
  )
}

export default Banner