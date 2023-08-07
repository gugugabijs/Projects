import React, {useEffect, useState} from 'react'
import '../box/box.css';

function Box({id,image, price, name_of_planet}) {

    const [count, setCount] = useState(0)
 
useEffect(()=>{
    var count=parseInt(localStorage.getItem(id));
setCount(count);
});
    

    const  addToCart=(id)=>{
        var count=parseInt(localStorage.getItem(id));
        if (isNaN(count) ){
            count=0;
        }
        
        count++;
        setCount(count);
        localStorage.setItem(id, count);
        };

        const  removeCart=(id)=>{
            var count=parseInt(localStorage.getItem(id));
            if (isNaN(count) ){
                count=0;
            }
            
            if(count==0){
                alert("You can't delete this item");
                return;
            }

            count--;
            setCount(count);
            localStorage.setItem(id, count);
            }

     return (
        <>
        <div className="card">
            <img src={image} alt="planet" />
            <p id='text'>{name_of_planet}</p>
            <h3 >{price} billion</h3>
            <h4>{count}</h4>
            <button id='btn' onClick={()=>removeCart(id)}>-</button>
            <button id='btn' onClick={()=>addToCart(id)}>+</button>
        </div>
</>
     )
 }
 
export default Box;