import React, { Component } from 'react'
import axios from 'axios';
export default class register extends Component {

    state = {
        users: []
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newUser = await axios.post('http://localhost:4000/api/users', {
            users: this.state
        })
        console.log(newUser)
    }

    render() {
        return (
            <div>
                <div className="conatiner mx-auto float-block">
                    <div className="row pt-4 justify-content-center">
                        <div className="col-md-7">
                            <div className="card p-3 float-block mx-right">
                                <div className="card-body">
                                    <h3 className="text-center">Social App</h3>
                                </div>
                                <h4 className="text-center" >Creat your SocialApp account  </h4>
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="text" placeholder="Name" className="form-control"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" placeholder="Last name"/>
                                        </div>
                                        
                                        <div className="form-group ml-2">
                                            <input type="text" className="form-control" placeholder="Email" required />
                                        </div>
                                        <div className="form-group ml-2">
                                            <input type="password" className="form-control" placeholder="Password" required />
                                            <small className="text-sm-left">Use 8 or more characters with a mix of letters, numbers & symbols</small>
                                        </div>
                                    </div>

                                </form>
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
