import React from 'react';
import {FontAwesome} from '@fortawesome/fontawesome-free'

const icon = "fa-coffee";

function Footer(){
    return(
        <div className="fixed-bottom" id="foot">
            <div className="row text-center  d-flex justify-content-between">
                <div className="col-md-6 text-md-right p-3">
                    Copyright &copy; 2020
                </div>
                <div className="col-md-6 text-md-left col-md-border p-3">
                    {/* icons - to do */}
                    <span>
                        <i className={`fa ${icon}`}/>
                    </span>

                </div>
            </div>
        </div>
    )
}
export default Footer;