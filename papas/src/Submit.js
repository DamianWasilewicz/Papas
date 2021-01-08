import React, { Component } from "react";
import './App.css';

export default class Submit extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'write a review...'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
        
    handleSubmit(event) {
        alert('Login submitted ' + this.state.value);
        event.preventDefault();
    }
    
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
        <div className="modal_content">
          <div className='popup'>  
            <div className='popup_inner'> 
            <div className='writeAReivew'>
                <label>
                    Write a Review!
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <span className="close" onClick={this.handleClick}>
                    &times;
                </span>
            </div>
            </div> 
            <div className='submit'>
                <form onSubmit={this.handleSubmit}>
                            <input type="submit" value="Submit" />
                </form> 
            </div>
        </div>  
        </div>
      </div>
            // <div className='box'>
            //     <div className='writeAReivew'>Write a Review!</div>
            //     <input
            //         type="text"
            //         value={this.state.value}
            //         onChange={this.handleChange}
            //     />
            // </div>
            
        );
    }
}
