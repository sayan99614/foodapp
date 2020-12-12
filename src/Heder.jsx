import React from 'react';
import "./App.css";
const Header=(props)=>{
return(
    <>
    <div className="row">
        <div className="col-sm-12">
        <div className="jumbo">
            <h1 className="display-1 text-white"><span className="material-icons">
        fastfood
        </span>Food Recipee</h1>
        
        <div className="input-group w-50 mx-auto">
            <input type="text" className="form-control" value={props.search} onChange={props.onInputChange} placeholder="Enter Recipe Name"/>
            <div className="input-group-append">
            <button onClick={props.onSearch} className="input-group-text" style={{width:'100px'}}><span className="material-icons mx-auto" style={{fontSize:'30px'}}>
            search
            </span>
            </button>
            </div>
        </div>
        </div>
        </div>
    </div>
    
        
    </>
);
}

export default Header;