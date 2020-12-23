import React,{useState,useEffect} from "react"
import Header from "./COMPONENT/Header";
import Recipe from "./COMPONENT/Recipe";
import "./Style Folder/App.scss";
import axios from "axios"

function App() {
  const [search,setSearch] = useState("Biryani...");
  const [recipes,setRecipes] = useState([]);
  const apiId ="60f43b73"
  const apiKey = "4b4fc468aba516692feccc4dac8f6118"

  const onInputChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const getRecipe = async()=>{
    const response = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${apiId}&app_key=${apiKey}`)
    setRecipes(response.data.hits)
  }
  const onSearchClick = () =>{
    getRecipe();
  }

  useEffect( async()=> {
   await getRecipe()
  },[])

  return (
    <div className="App">
        <Header 
        search={search} 
        onInputChange={onInputChange} 
        onSearchClick={onSearchClick}
        />
        <div className="container">
        <Recipe recipes={recipes}/>
        </div>
    </div>
  );
}

export default App;

//API ID
//60f43b73
//API  keys
//4b4fc468aba516692feccc4dac8f6118
