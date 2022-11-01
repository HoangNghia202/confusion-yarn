import React, { Component } from 'react';

class Loading extends Component {
    state = {  } 
    render() { 
        return (
            <diV className="col-12">
                <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
                <p>Loading . . .</p>
            </diV>
        );
    }
}
 
export default Loading;