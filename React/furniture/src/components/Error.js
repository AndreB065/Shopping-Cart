import React, { Component } from 'react'
import { Link } from "react-router-dom";

class ErrorPage extends Component {
    render() {
        return (
            <div className="error">
                <h1>Does NOT exist!</h1>
                <Link to={`/`}>
                <button className="item-button">Go Back?</button>
              </Link>
            </div>
        )
    }
}
export default ErrorPage