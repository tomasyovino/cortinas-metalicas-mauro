import { Container, Row, Button } from "react-bootstrap";
import img1 from "../assets/img/bannerImage.webp";

const Banner = () => {
  return (
    <section id="banner">
      <Container>
        <Row>
          <div class="left">
              <p>Fabricación, venta y reparación de cortinas metálicas.</p>
              <Button href="#hrefbutton" size="lg" variant="danger">SERVICIOS</Button>
          </div>
          <div class="right">
            <img src={img1} alt="Cortina Metálica" />
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Banner