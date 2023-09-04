
import { useState } from 'react';
import './App.css'
import Card from './components/card'
import Text from './components/text'
import Button from './components/button';


function App() {
  
 
const [query, setQuery]=useState("");
const[images,setImages]=useState([]);

const getApiData = async () => {
  const url=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${query}&per_page=24&format=json&nojsoncallback=1`
  const response = await fetch(
    url
  ).then((response) => response.json());

   setImages(response.photos.photo)
   console.log(response.photos.photo)
};

const handleInputChange = (e) => {
  setQuery(e.target.value);
};

const   handleBtn= (text)=>{
 
  setQuery(text);
  getApiData();

};
  return (
    <>
    <div className="container">
      <div className='list'>

         <div className='navbar'><input type="search" id='search' placeholder='Search...' onChange={handleInputChange}
value={query}/> 
         <button id='nav-btn' onClick={getApiData }>Click</button>
         </div>
       
        <div className='btns'>
   <Button name={"Mountain"}  onClick={() => handleBtn("mountain")}/>
   <Button name={"Beaches"}  onClick={() => handleBtn("beaches")}/>
   <Button name={"Birds"}  onClick={() => handleBtn("birds")}/>
   <Button name={"Food"}  onClick={() => handleBtn("food")}/>
        </div>

       <Text title ={query}/>
   

 <div className='cards'>
 {images.map(image=>(
  <Card server={image.server}
  id={image.id} secret={image.secret}
   key={image.id} image={image}/>))}
        </div>

      
      </div>
      </div>
    </>
  )
}

export default App
