import {useState} from 'react';
import './Cards.css';

function Cards({ id,image ,amount,cityName,description, removeTour}){
 
  
    const[readmore,setReadmore]=useState(false);//mtlb phle readmore open nhi h
     description= readmore ? description: `${description.substring(0,200)}....`;
    
    function readHandler(){
     
        setReadmore(!readmore);//hum chate h up pr read more switch kre,if false h toh true ho jaye else vice verca
     }
    

    //  function removeHandler(){
    //  //if  koi city remove krni h toh usko ui se remove krna pdega or remove krne ke bad fir se render bhi karana pdega 
    //  }
return (
    <div className="card">

    
       <img src={image}  alt="" className="image"></img>
    


    <div className="tour-info">
        <div className="tour-details">
           <h4 className="tour-price">Rs {amount}</h4>
           <h4 className="tour-name">{cityName}</h4>
        </div>
       
     
     <div className="description">
        {description}
     <span className="read-more" onClick={readHandler}>
        {
            readmore ? `Show Less`:`Read More` 
        }
     </span>
     </div>
   </div>

     <button className="btn-red" onClick={()=>removeTour(id)}>Not Intrested</button>
    </div>
    
    
);
}
export default Cards;