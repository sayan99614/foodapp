import { useEffect, useState } from 'react';
import './App.css';
import Header from './Heder';
import Recipe from './Recipe';
import Axios from 'axios';
function App() {
  
  const [searchval,setSearchvalue]=useState('chicken');
  const [recipes,setRecepies]=useState([]);
  const application_id='98597ba6';
  const application_key='54515b0fd8c02d0a83e082a7e2924152';
  const onInputChange=(event)=>{
    setSearchvalue(event.target.value);
  }

  useEffect(()=>{
    getRecipes();
  },[]);

  const getRecipes=async()=>{
    const response=await Axios.get(`https://api.edamam.com/search?q=${searchval}&app_id=${application_id}&app_key=${application_key}`);
    setRecepies(response.data.hits);
    console.log(response);
  }
  
  const onSearch=()=>{
    getRecipes();
  }
  return (
    <div className="App">
      <Header search={searchval} onInputChange={onInputChange} onSearch={onSearch}/>
      <div className="container">
      <Recipe recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;
