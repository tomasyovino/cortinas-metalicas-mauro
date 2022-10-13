import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home, Gallery, About, Contact, Footer } from './components/exports';

const App = () => {
  return (
    <>
      <Home />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
