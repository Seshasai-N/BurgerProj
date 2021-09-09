import React  from 'react';
import   './Burger.css';
import Ingredient from './Ingerdients/Ingerdients'

const burger =(props) => {
  
    let layers= Object.keys(props.ingredients).map(igkey => {
return[...Array(props.ingredients[igkey])].map((_,i) => {
   return <Ingredient key={igkey+i}  type={igkey}/>
})
    }).reduce((arr,el) =>{
        return arr.concat(el)
    },[]);

    if(layers.length===0){
        layers=<p>start adding Layers</p>
    }
    return(
        
        <div className='Burger'>
            
<Ingredient type="bread-top"/>
{layers}
<Ingredient type="bread-bottom"/>
        </div>
    );

}
export default burger;