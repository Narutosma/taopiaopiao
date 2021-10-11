import React, { Component } from 'react'
import "./index.scss";
// import PropTypes from "prop-types";

export default class FullText extends Component {
//     static propTypes = {
//         textHeight: PropTypes.number.isRequired
//     }

    state = {
        showMore: false
    }
    render() {
        return (
            <div className="fullText" onClick={ this.showAll }>
                {this.props.children}
                { 
                    this.state.showMore && (<span className="fullText-more">更多</span>)
                }
            </div>
        )
    }
}
