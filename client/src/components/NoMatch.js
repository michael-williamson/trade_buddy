import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NoMatch extends Component {
    render() {
        return (
            <div>
                This path is not defined
                <Link to="/">Back to Main Page</Link>
            </div>
        );
    }
}

export default NoMatch;