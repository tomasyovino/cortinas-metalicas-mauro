import { useState } from "react"
import { Container, Collapse } from "react-bootstrap";
import { CheckCircle } from '@mui/icons-material';

const About = () => {
  const [ open, setOpen ] = useState(false);
  const [ open2, setOpen2 ] = useState(false);
  const [ open3, setOpen3] = useState(false);

  return (
    <section id='about'>
      <Container className="features-container">
        <Container className="features">
          <h3>Sobre Nosotros</h3>
          <h4>Expertos en cortinas metálicas</h4>
          <div className="aboutImg" />
          <p>Somos una empresa argentina dedicada fundamentalmente a la fabricación y colocación de cortinas metálicas. Ofrecemos nuestros servicios desde hace más de 15 años, brindando al cliente la mejor atención y calidad.</p>
        </Container>

        <Container className="features">
          <h3>Servicios</h3>
          <h4>¡Calidad precio inigualable!</h4>
          <div className="services" id="services">
            <button
              onClick={() => setOpen(!open)}
            >
              <CheckCircle style={{fontSize:"43px", color:"red"}} />
              <span>Fabricación de cortinas nuevas</span>
            </button>
            <Collapse in={open}>
              <div className="collapse-text">
                <p>Armados de cortinas metálicas, de diferentes tipos de chapas y espesor.</p>
              </div>
            </Collapse>

            <button
              onClick={() => setOpen2(!open2)}
            >
              <CheckCircle style={{fontSize:"43px", color:"red"}} />
              <span>Reparaciones</span>
            </button>
            <Collapse in={open2}>
              <div className="collapse-text">
                <p>Reparaciones en general y se realizan de forma inmediata durante el mismo día.</p>
                <p>Cambios de:</p>
                <ul>
                  <li>Taquillas.</li>
                  <li>Ejes.</li>
                  <li>Motores.</li>
                  <li>Puertas de escape.</li>
                </ul>
              </div>
            </Collapse>

            <button
              onClick={() => setOpen3(!open3)}
            >
              <CheckCircle style={{fontSize:"43px", color:"red"}} />
              <span>Bobinados de motores</span>
            </button>
            <Collapse in={open3}>
              <div className="collapse-text">
                <p>Se hacen bobinados de motores nacionales.</p>
              </div>
            </Collapse>
          </div>
        </Container>
      </Container>
    </section>
  )
}

export default About