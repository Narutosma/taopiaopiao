import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./index.scss";

export default class Tags extends Component {
    static propTypes = {
        tags: PropTypes.array.isRequired,
        currentTag: PropTypes.string.isRequired,
        onChangeTag: PropTypes.func.isRequired
    }

    render() {

        const tags = this.props.tags.map(it => (
            <span className={this.props.currentTag === it.code? "active" : ""} key={it.name} onClick={() => this.props.onChangeTag(it.code)}>{ it.name }</span>
        ));

        return (
            <div className="tags">
               { tags }
            </div>
        )
    }
}