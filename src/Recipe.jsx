import React from 'react';
import './App.css';

const Recipe=(props)=>{
    const{recipes}=props;
    return (<>
        <div className="card-columns mt-3">
            {
                recipes.map(recepie=>(
                       <div className="card mb-3 text-center">
                       <img className="img-fluid shadow-sm" style={{width:'100%',borderRadius:'5px'}} src={recepie.recipe.image}/>
                       <div className="card-body">
                           <h5>{recepie.recipe.label}</h5>
                       </div>
                       <ul className="list-group list-group-flush">
                           {recepie.recipe.ingredientLines.map(ingrident=>(
                               <li className="list-group-item ">{ingrident}</li> 
                           ))
                           }
                       </ul>
                       </div> 
                ))
            }
        </div>
    </>);
}
export default Recipe;