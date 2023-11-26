import React, { Component } from "react";

class Person extends Component{
    render(){
        // return(
        // <div className="App-header">
        //     <i>
        //         <h1>Hello GFG</h1>
        //     </i>
        // </div>
        // );

        return React.createElement(
            "div",
            { class: "App-header"},
            React.createElement(
                "i",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Hello GFG"
                )
            )
        );
    }
}
export default Person;