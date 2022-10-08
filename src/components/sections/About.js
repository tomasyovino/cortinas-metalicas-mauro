import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section id='about'>
      <Container>
        <Container>
          <h3>Who we are</h3>
          <h4>A subheading about who we are</h4>
          <img src="" alt="who we are" />
          <p>Duis neque nisi, dapibus sed mattis quis, rutrum accumsan magna sed. Suspendisse eu varius nibh. Suspendisse vitae magna eget odio amet mollis justo facilisis quis. Sed sagittis amet lorem ipsum.</p>
        </Container>
        <Container>
          <h3>What we do</h3>
          <h4>A subheading about what we do</h4>
          <ul>
            <li>Fabricación de cortinas nuevas</li>
            <li>Reparaciones</li>
            <li>Bobinados de motores</li>
          </ul>
        </Container>
      </Container>
    </section>
  )
}

export default About