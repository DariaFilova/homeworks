import About from './components/About/About';
import Dream from './components/Dream/Dream';
import Header from './components/Header/Header';
import Hobbies from './components/Hobbies/Hobbies';
import Movies from './components/Movies/Movies';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <About id='about' />
      <Hobbies />
      <Movies id='movies' />
      <Dream />
    </div>
  );
}

export default App;

