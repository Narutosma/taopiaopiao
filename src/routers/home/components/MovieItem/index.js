import React, {Component} from 'react';

import "./index.scss";

class Index extends Component {
    render() {
        return (
            <div className="movie-item">
                <div className="movie-item-cover">海报</div>
                <div className="movie-item-info">
                    <div className="movie-item-name">不能说的秘密</div>
                    <div className="movie-item-score">淘票票评分 <span>9.9</span>|99万人评</div>
                    <div className="movie-item-director">导演：周杰伦</div>
                    <div className="movie-item-actor">主演：周杰伦</div>
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