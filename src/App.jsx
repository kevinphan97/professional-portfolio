import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Technologies from './components/technologies/Technologies';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Technologies />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
