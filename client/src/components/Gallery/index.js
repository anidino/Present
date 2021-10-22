import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

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
                />
            </div>
        </section>
    
    );
}

export default Gallery;