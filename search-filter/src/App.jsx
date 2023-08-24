import { useState } from 'react';
import { Data } from './data';

import './App.css'

function App() {
  
const[query,setQuery]=useState('');
console.log(Data.filter(Data=>Data.name.toLowerCase().includes("ap")))
  return (
    
    <div className='app'>
<input type="text" placeholder='search..' className='search' onChange={e=>setQuery(e.target.value)} />
<ul className='list'>
  {Data.filter(Data=>Data.name.toLowerCase().includes(query)).map(Data=>(<li key={Data.id} className='listItems'>{Data.name}</li>
))}

</ul>
    </div>
  );
}

export default App
