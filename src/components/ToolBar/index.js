import React, {Component} from 'react';
import "./index.scss";
import PropTypes from "prop-types";

// 头部组建
class Index extends Component {
    // 类型检测
    static propTypes = {
        city: PropTypes.string.isRequired,
        // 城市按钮点击事件
        cityLayer: PropTypes.func.isRequired,
        // 当天日期
        day: PropTypes.number.isRequired
    };

    render() {
        return (
            <div className="topBar">
                <span className="topBar_city" onClick={this.props.cityLayer}>{ this.props.city }</span>
                <div className="topBar_search" />
                <div className="topBar_scan">
                    <i className="iconfont icon-saoyisao" />
                </div>
                <div className="topBar_today">
                    <i className="iconfont icon-riqian" >
                        <span className="topBar_today_day">{ this.props.day }</span>
                    </i>
                </div>
            </div>
        );
    }
}



export default Index;
