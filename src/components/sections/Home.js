import { NavBar, Banner } from "../exports";
import { useEffect, useState } from "react";
import socialIcon from "../../assets/img/wpp.png";


const Home = () => {
  const [showSocialIcon, setShowSocialIcon] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          setShowSocialIcon(true);
        } else {
          setShowSocialIcon(false);
        }
      });
  }, []);


  return (
    <section id="header">
      <NavBar />
      <Banner />
      <a href="https://wa.me/5491150521731" target="_blank" rel="noreferrer">
        <img src={socialIcon} alt="Contáctanos" className="socialIcon" style={{ right: showSocialIcon ? "20px" : "-100px" }}/>
      </a>
    </section>
  )
}

export default Home