import React, { Component } from 'react'
import axios from 'axios';
export default class register extends Component {

    state = {
        name: '',
        last_name: '',
        email: '',
        password: '',
        users: []
    }
    
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users')
        console.log(res);
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }
        
        window.location.href = '/login';
        await axios.post('http://localhost:4000/signup', newUser)
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

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
                                <h4 className="text-center" >Create your SocialApp account  </h4>
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input 
                                                type="text" 
                                                placeholder="Name" 
                                                className="form-control" 
                                                onChange={this.onInputChange}
                                                name="name" 
                                                />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input 
                                            type="text"  
                                            className="form-control" 
                                            placeholder="Last name" 
                                            onChange={this.onInputChange}
                                            name="last_name"
                                            />
                                            
                                        </div>
                                        <div className="form-group ml-2">
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Email" 
                                            onChange={this.onInputChange}
                                            name="email" 
                                            required />
                                        </div>
                                        <div className="form-group ml-2">
                                            <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Password" 
                                            onChange={this.onInputChange}
                                            name="password" 
                                            required />
                                            <small className="text-sm-left">Use 8 or more characters with a mix of letters, numbers & symbols</small>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Register
                                    </button>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
