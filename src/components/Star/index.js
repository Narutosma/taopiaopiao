import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./index.scss";

export default class Star extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        size: PropTypes.number
    }

    render() {
        return (
            <div className="star" 
                style={{backgroundSize: `${this.props.size}px`,
                        width: `${this.props.size * 5}px`,
                        height: `${this.props.size}px`}}>
                <div className="fillStar" 
                    style={{backgroundSize: `${this.props.size}px`,
                    width: `${this.props.size * this.props.value}px`,
                    height: `${this.props.size}px`}}/>
            </div>
        )
    }
}
