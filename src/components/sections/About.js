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
          <h3>Who we are</h3>
          <h4>A subheading about who we are</h4>
          <div className="aboutImg" />
          <p>Duis neque nisi, dapibus sed mattis quis, rutrum accumsan magna sed. Suspendisse eu varius nibh. Suspendisse vitae magna eget odio amet mollis justo facilisis quis. Sed sagittis amet lorem ipsum.</p>
        </Container>

        <Container className="features">
          <h3>What we do</h3>
          <h4>A subheading about what we do</h4>
          <div className="services">
            <button
              onClick={() => setOpen(!open)}
            >
              <CheckCircle style={{fontSize:"43px", color:"red"}} />
              <span>Fabricación de cortinas nuevas</span>
            </button>
            <Collapse in={open}>
              <div className="collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
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
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
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
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </Collapse>
          </div>
        </Container>
      </Container>
    </section>
  )
}

export default About