import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/forest.jpg";

function Gallery(props) {
    const currentCategory = {
        name: "active",
        description: "upbeat songs"
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div>
                <img src={photo}
                alt='active'
                className="img-thumbnail mx-1"
                />
            </div>
        </section>
    
    );
}

export default Gallery;