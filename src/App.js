import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from  './components/Navbar/navbar';
import Header from './components/Header/header';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contacts from './components/Contact/contact';

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles:{
            number:{
              value:25,
              density:{
                enable:true,
                value_area: 1000
              }
            },
            shape:{
              type: "circle",
              stroke:{
                width: 6,
                color: "rgba(133, 41, 34, 0.911)"
              }
            }
          }
        }}
      />
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
