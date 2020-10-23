import React from 'react';

function Footer(){
    return(
        <div className="container fixed-bottom">
            <div className="row d-flex justify-content-between">
                <div className="col-md-5">
                    Copyright &copy; 2020
                </div>
                <div className="col-md-5">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;