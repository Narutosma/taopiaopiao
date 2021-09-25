import React, {Component} from 'react';
import PropTypes from "prop-types";
import "./index.scss";

class Index extends Component {
    static propTypes = {
        movieInfo: PropTypes.object.isRequired
    }

    render() {
        const { director, remark, showName, leadingRole, poster } = this.props.movieInfo;
        // 导演
        const dir = director.split(",").slice(0, 3).join(" ");
        // 演员
        const actor = leadingRole.split(",").slice(0, 3).join(" ");
        return (
            <div className="movie-item">
                <div className="movie-item-cover">
                    <img src={poster} alt=""/>
                </div>
                <div className="movie-item-info">
                    <div className="movie-item-name">{showName}</div>
                    <div className="movie-item-score">淘票票评分 <span>{remark}</span> 99万人评</div>
                    <div className="movie-item-director">导演：{dir}</div>
                    <div className="movie-item-actor">主演：{actor}</div>
                    <div className="movie-item-tag">
                        <span className="tTag">票房榜No.1</span>
                    </div>
                </div>
                <div className="movie-item-buy">
                    <span>购票</span>
                </div>
            </div>
        );
    }
}

export default Index;
