import React, { Component } from "react";

class Person extends Component{
    constructor(props){
        super(props);
        this.props=props;        
    }
    render(){
        return(
        <div>
            <i>
                <h1>Hello {this.props.name}, This is FS Class</h1>
            </i>
        </div>
        );
    }
}
export default Person;