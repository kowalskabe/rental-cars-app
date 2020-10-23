import React from 'react'

import nissan from '../imgs/nissan-brand-logo.jpg'

function Brands(){
    return(
        <div className="row">
            <img src={nissan} className="rounded float-center" alt="nissan-brand-logo"/>
        </div>
    )
}
export default Brands;