import React, {Component, useState} from 'react';

const users = {}

class LoginForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          formData: {
            name: '',
            password: ''
          }
        };
      }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState(prevState => ({
            formData: { ...prevState.formData, [name]: value }
        }))
        users[name] = value
    }

    handleSubmit = async (event) => {
        const [setIsLoading] = useState(false);
        setIsLoading(true);
        event.preventDefault();
        // Perform additional actions with the form data
        if(users.hasOwnProperty(this.state.formData.name)){
            
        }
      };

    render() {
        const { name, password } = this.state.formData;
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="name" placeholder="Enter your username" value={name} onChange={this.handleChange} required></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={this.handleChange} required></input>
            </div>
            <button type="submit">Submit</button>
            </form>
        );
    }
}


export default LoginForm
