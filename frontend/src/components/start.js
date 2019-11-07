import React, { Component } from 'react'
import map from '../static/like.svg';

import Register from '../components/register';
export default class start extends Component {

    render() {
        return (
            <div className="container  border border-light p-4 float-left">
                <div className="container p-4">
                    <h2 className="display-3">Welcome to SocialApp, i'd like to know who you are...</h2>
                        <br/>
                        <h3>Are you new?</h3>
                    
                </div>
                    <img src={map} className="card-img-top float-right" alt="..." style={{width: 400}} />
                    <Register/>
                    
                


            </div>

        )
    }
}
