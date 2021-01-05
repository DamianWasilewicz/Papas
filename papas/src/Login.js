import React from 'react';  
import './App.css';  

class Login extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
          username: 'type username here',
          password: 'type password here'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({username: event.target.username});
        this.setState({password: event.target.password});
      }
    
      handleSubmit(event) {
        alert('Login submitted ' + this.state.username);
        event.preventDefault();
      }

  render() {  
    return (  
        
        <div className='popup'>  
            <div className='popup_inner'> 
                <div className='username'>
                    <label>
                        Username: 
                        <textarea rows="1" value={this.state.username} onChange={this.handleChange} />
                    </label>
                </div>
                <div className='password'>
                        <label>
                            Password: 
                            <textarea rows="1" value={this.state.password} onChange={this.handleChange} />
                        </label>
                </div>
            </div> 
            <div className='submit'>
                <form onSubmit={this.handleSubmit}>
                            <input type="submit" value="Submit" />
                </form> 
            </div>
        </div>    
        );  
    }  
}  

export default Login;