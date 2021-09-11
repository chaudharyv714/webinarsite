import './App.css';
import Nav from './components/navbar';
import Footer from './components/footer';
import Contact from './components/contact';
import Committee from './components/committee';
import Orgcommittee from './components/orgcommittee';
import About from './components/about';
import Card from './components/cards';
import Topics from './components/topics';
import Home from './components/home.js';
import Schedule from './components/schedule';

function App() {
  return (
    <div id="container">
      <Nav />
      <Home />
      <div className="wrapper">
        <About />
        <Topics />
      </div>
      <Schedule />
      <div className="wrapper">
        <Card url="rajpath.jpg" head="title" text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur amet natus eligendi suscipit nesciunt, esse quasi! Ad tenetur, iusto ipsum ab sit necessitatibus quia, consequatur facere, blanditiis eum impedit voluptatem!" />
        <Card url="rajpath.jpg" head="title" text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur amet natus eligendi suscipit nesciunt, esse quasi! Ad tenetur, iusto ipsum ab sit necessitatibus quia, consequatur facere, blanditiis eum impedit voluptatem!" />
        <Card url="rajpath.jpg" head="title" text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur amet natus eligendi suscipit nesciunt, esse quasi! Ad tenetur, iusto ipsum ab sit necessitatibus quia, consequatur facere, blanditiis eum impedit voluptatem!" />
      </div>
      <div className="wrapper">
        <Orgcommittee />
        <Committee />
        <Contact />
      </div>

      <Footer />
    </div>

  );
}

export default App;
