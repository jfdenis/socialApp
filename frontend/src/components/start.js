import React, { Component } from 'react'
import map from '../static/flatworldmap_118410.png';

export default class start extends Component {

    render() {
        return (
            <div className="container  border border-light">
                <div className="card border border-light" style={{ width: 600 }}>
                    <img src={map} className="card-img-top" alt="..." />
                    
                </div>


            </div>

        )
    }
}
