import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from  './components/Navbar/navbar';
import Header from './components/Header/header';
import About from './components/About/about';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
    </div>
  );
}

export default App;
