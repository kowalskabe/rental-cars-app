import React from 'react';
import nissan from '../imgs/2021_nissan_gt-r_coupe.jpg'


function Banner() {
    return(
        <header className="masthead" style={{backgroundImage:`url(${nissan})`}}>
            <div className="container">
                <div className="masthead-heading text-uppercase">Title</div>
                 <div className="masthead-subheading">Subtitle</div>
            </div>
        </header>
    )
}

export default Banner;
