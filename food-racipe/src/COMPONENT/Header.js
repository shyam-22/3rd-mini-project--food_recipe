import React from "react";

const Header = (props) => {
  const {search,onInputChange,onSearchClick} = props
  return (
    <div className="jumbotron">
         <i className="material-icons brand-icon">emoji_food_beverage restaurant restaurant_menu
           local_cafe food_bank local_pizza</i>
      <h1 className="display-2" style={{margin:"10px"}}> 
        <i className="material-icons brand-icon" style={{margin:"10px"}}>fastfood</i>
        <i><b>...Food Recipes...</b></i>
        <i className="material-icons brand-icon" style={{margin:"10px"}}>menu_book</i>
      </h1>

          <div className="input-group mx-auto">
              <input type="text" className="form-control" placeholder="Search Your Recipe....." 
                value={search} onChange={onInputChange} />
              <div className="input-group-append">
                       <button type="button" className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
              </div>
          </div>
      
    </div>
  );
};

export default Header;
