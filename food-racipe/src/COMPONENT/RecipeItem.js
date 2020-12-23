import React from 'react'

const RecipeItem = (props) => {
    const {label,image,ingredientLines} = props;
    return (
        <div className="col-md-3">
        <div className="card text-center">
            <img className="image-fluid w-50 mx-auto rounded-circle" src={image} alt=""/>
            <div className="card-body">
                <h5 className="card-title"><i><b>Title</b></i> : {label}</h5>
            </div>
            <ul className="list-group"><i><b>Procedure</b></i><i className="material-icons">south</i>
                    {
                        ingredientLines.map(ingredient =>(
                            <li className="list-group-item">{ingredient}</li>
                        ))
                    }
                </ul>
        </div>
    </div>
    )
}

export default RecipeItem;
