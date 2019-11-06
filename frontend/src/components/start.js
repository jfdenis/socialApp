import React, { Component } from 'react'
import map from '../static/like.svg';

import Register from '../components/register';
export default class start extends Component {

    render() {
        return (
            <div className="container  border border-light p-4 float-left">
                    <img src={map} className="card-img-top float-right" alt="..." style={{width: 400}} />
                    <Register/>
                    
                


            </div>

        )
    }
}
