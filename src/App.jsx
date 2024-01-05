import React from 'react';
import { useState } from 'react';
import data from './data';
import Tours from "./components/Tours";



const App=() =>{

  const[tours,setTours]=useState(data);

  function removeTour(id){
const newTours=tours.filter(tour=>tour.id!==id);//this will filter the data ,jaha pr bhi id equal nhi h vo sab new tours ke andr aa jayega
setTours(newTours);//purane wale tours me se filtering ho rhi h jiski id match nhi ho rhi or vo ui pr dikha diya
}


if(tours.length===0){
  return(
    <div className="refresh">
    <h2>No Tours Left</h2>
    <button className="btn-white" onClick={()=>setTours(data)}>Refersh</button>
    </div>
  );
}
  
 return(
  <div className="App">
    
  <Tours tours={tours} removeTour={removeTour}/>
  </div>
  )
};

export default App;
