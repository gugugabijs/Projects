
import './App.css';
import Box from './components/box/box'
import  uranus from './assets/images/uranus.jpg';
import venus from './assets/images/venus.jpg'
import saturn from './assets/images/saturn.jpg'

function App() {
  return (
    <div className="App">
      <div className='cards'>
      <Box id={1} image={uranus} price={500}  name_of_planet={"Uranus"}/>
      <Box id={2} image={venus} price={666}  name_of_planet={"Mars"}/>
      <Box id={3} image={saturn} price={843}  name_of_planet={"Saturn"}/>
      
      </div>
    </div>
  );
}

export default App;
