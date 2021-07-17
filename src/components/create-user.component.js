import React, { Component } from 'react'
import axios from 'axios';
const BACKEND_URI = 'https://mern-exercises-backend.herokuapp.com';


export default class CreateUser extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: ''
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            username : this.state.username,
        }

        console.log(user);
        axios.post(BACKEND_URI+'/users/add',user)
          .then(response => {
              console.log(response.data);
              this.setState({username:''});
            })
          .catch(err => console.error(err))
        
    }
    render() {
        return (
            <div>
                <h1>Create User</h1>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>User: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                        value="Create User"
                        className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>  
        )
    }
}
