import './Tours.css';
import Cards from './Cards';
function Tours({tours,removeTour}){
    return(
        <div className='container'>
            <div>
                <h2 className='title'>Plan With Love</h2>
            </div>
            
         

         <div className='cards'>
            {
                tours.map((tour)=>{/* ab yaha 7 cards banane se acha h m single line se 7 cards integrate kr deta hu through maps */
                   return(//har ek tour ke liye 7 cards return ho rhe h
                   <Cards {...tour} removeTour={removeTour}></Cards>
                   );
                })
            }
            </div>  
         </div>
           
       
    );
}

export default Tours;