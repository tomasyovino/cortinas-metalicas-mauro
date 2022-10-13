import { useState } from "react";
import { Container } from "react-bootstrap";
import ReactWhatsapp from 'react-whatsapp';

const Form = () => {
  const [ message, setMessage ] = useState("");
  
  return (
    <Container className="form">
      <h4>¡Envíanos un mensaje!</h4>
      <textarea 
        id="message"
        placeholder="Mensaje"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <ReactWhatsapp number="54-911-5052-1731" message={message}>Enviar</ReactWhatsapp>
    </Container>
  )
}

export default Form