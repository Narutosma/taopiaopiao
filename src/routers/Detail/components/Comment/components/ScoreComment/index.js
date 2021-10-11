import React, { Component } from 'react'
import './index.scss';
import Star from '../../../../../../components/Star';

export default class ScoreComment extends Component{

    render() {
        return (
            <div className="scoreWrap">
                <div className="scoreWrap-score">
                    <div className="score">9.3</div>
                    <div className="score2">9999人评</div>
                </div>
                <div className="scoreWrap-star">
                    <div className="star-item">
                        <Star value={5} size={6}></Star>
                        <div className="star-bar">
                            <div className="fill-bar" style={{width: "70%"}}/>
                        </div>
                    </div>
                    <div className="star-item">
                        <Star value={4} size={6}></Star>
                        <div className="star-bar">
                            <div className="fill-bar" style={{width: "50%"}}/>
                        </div>
                    </div>
                    <div className="star-item">
                        <Star value={3} size={6}></Star>
                        <div className="star-bar">
                            <div className="fill-bar" style={{width: "30%"}}/>
                        </div>
                    </div>
                    <div className="star-item">
                        <Star value={2} size={6}></Star>
                        <div className="star-bar">
                            <div className="fill-bar" style={{width: "20%"}}/>
                        </div>
                    </div>
                    <div className="star-item">
                        <Star value={1} size={6}></Star>
                        <div className="star-bar">
                            <div className="fill-bar" style={{width: "10%"}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
