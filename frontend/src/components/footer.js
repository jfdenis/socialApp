import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class footer extends Component {
    render() {
        return (
            
            <footer className="page-footer font-small ">

                <div className="container">
                    <ul className="list-unstyled list-inline text-center py-2">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Register for free</h5>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/signup" className="btn btn-outline-dark rounded-pill">Sign up!</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright bg-secondary text-center py-3">© 2019 Copyright:
                    <Link className="text-light" to="#"> Julio Denis</Link>
                </div>
            </footer>
            
        )
    }
}
