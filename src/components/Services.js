import { Construction, LineWeight, Settings } from '@mui/icons-material';

const Services = () => {
  return (
    <div id='services'>
        <h3>NUESTROS SERVICIOS</h3>
        <div className='services-container'>
            <div>
                <Construction style={{fontSize: "200px"}} />
                <h5>Reparaciones</h5>
            </div>
            <div>
                <LineWeight style={{fontSize: "200px"}} />
                <h5>Cortinas nuevas</h5>
            </div>
            <div>
                <Settings style={{fontSize: "200px"}}/>
                <h5>Bobinados de motores</h5>
            </div>
        </div>
    </div>
  )
}

export default Services