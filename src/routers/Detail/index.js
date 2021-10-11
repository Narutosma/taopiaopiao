import React, { Component } from 'react';
import "./index.scss";
import FullText from './components/FullText';
import ArticleList from "./components/Article";
import Comment from "./components/Comment";
import { Link } from "react-router-dom";
export default class Detail extends Component {

    state = {
        textHeight: 0
    }

    constructor(props){
        super(props);
        this.txt = React.createRef();
    }

    componentDidMount(){
        this.setState({
            textHeight: this.txt.current.clientHeight
        })
    }

    render() {
        const { textHeight } = this.state;
        return (
            <div className="detail">
                <div className="detail-header">
                    <div className="detail-top">
                        <i className="iconfont icon-fanhui" onClick={ () => {
                            this.props.history.goBack();
                        }}/>
                        <i className="iconfont icon-fenxiang" />
                    </div>
                    <div className="detail-info">
                        <div className="detail-info-poster" style={{backgroundImage: `url("https://gw.alicdn.com/i3/O1CN01nCaVI01Lt5lvXF92X_!!6000000001356-0-alipicbeacon.jpg_320x320Q30s100.jpg_.webp")`}} />
                        <div className="detail-info-introduce">
                            <div className="detail-info-title">长津湖</div>
                            <div className="detail-info-other">176分钟 / 剧情 / 历史 / 战争 / 中国大陆</div>
                            <div className="detail-info-other">2021-09-30 09:30 在中国大陆上映</div>
                            {/* <div className="detail-info-other">117分钟</div>
                            <div className="detail-info-other">2020-10</div> */}
                        </div>
                    </div>
                </div>
                <div className="detail-content">
                    <div className="detail-audience">
                        <div className="detail-audience-score">
                            <div className="detail-audience-mark">
                                <h3>9.3</h3>
                                <span>观众评分 276783</span>
                            </div>
                            <div className="detail-audience-mark">
                                <h3>83%</h3>
                                <span>V淘推荐度</span>
                            </div>
                            <div className="detail-audience-mark">
                                <h3>71783</h3>
                                <span>想看人数</span>
                            </div>
                        </div>
                        <div className="detail-idea">
                            <button><i className="iconfont icon-aixin1" /> 想看</button>
                            <button><i className="iconfont icon-shoucang1" /> 收藏</button>
                        </div>
                    </div>
                    <div className="detail-audience">
                        <FullText textHeight={textHeight}>
                            <div className="detail-text" ref={this.txt}>
                                继2019年《我和我的祖国》、2020年《我和我的家乡》，国庆三部曲之《我和我的父辈》接棒定档2021年国庆。由吴京、章子怡、徐峥、沈腾导演，“中国电影追梦人”再次集结，以革命、建设、改革开放和新时代为历史坐标, 通过“家与国”的视角描写几代父辈的奋斗经历，讲述中国人的血脉相连和精神传承，再现中国人努力拼搏的时代记忆。
                            </div>
                        </FullText>
                    </div>
                    <div className="detail-audience">
                        <h3>演职人员</h3>
                        <ArticleList />
                    </div>
                    <div className="detail-audience">
                        <h3>观众热评</h3>
                        <Comment />
                    </div>
                    <Link to="/seat" className="buyTicket">
                        特惠选座
                    </Link>
                </div>
            </div>
        )
    }
}