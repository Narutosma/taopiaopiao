import React, {Component} from 'react';
import "./index.scss";

class Index extends Component {
    render() {
        return (
            <div className="itemWrapper">
                { this.props.children }
            </div>
        );
    }
}

export default Index;