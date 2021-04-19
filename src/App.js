import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from  './components/Navbar/navbar';
import Header from './components/Header/header';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contacts from './components/Contact/contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
