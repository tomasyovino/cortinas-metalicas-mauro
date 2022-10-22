import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/img/gallery1.webp";
import img2 from "../assets/img/gallery2.webp";
import img3 from "../assets/img/gallery3.webp";
import img4 from "../assets/img/gallery4.webp";
import img5 from "../assets/img/gallery5.webp";
import img6 from "../assets/img/gallery6.webp";

const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
  };

  return (
    <section id='gallery'>
      <Container>
        <Carousel 
          responsive={responsive} 
          infinite={true}
          centerMode={true}
          autoPlay={true}
          arrows={false}
          customTransition="1000ms ease-in-out"
          transitionDuration={1000}
        >
          {
            galleryData.map(data => (
                <img key={data.id} src={data.img} alt="gallery-img" draggable="false" />
            ))
          }
        </Carousel>
      </Container>
    </section>
  )
}

export default Gallery

const galleryData = [
  {
    id: 1,
    img: img1
  },
  {
    id: 2,
    img: img2
  },
  {
    id: 3,
    img: img3
  },
  {
    id: 4,
    img: img4
  },
  {
    id: 5,
    img: img5
  },
  {
    id: 6,
    img: img6
  },
]