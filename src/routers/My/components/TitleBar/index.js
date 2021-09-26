import React, {Component} from 'react';
import "./index.scss"
import TabMenu from "../../../../components/TabMenu";

import bjm from "./bjm.webp";

// 标题bar
class Index extends Component {
    render() {
        return (
            <div className="titleBar">
                <div className="titleBar-avatar">
                    <img src={bjm} alt=""/>
                </div>
                <div className="titleBar-info">
                    <span className="titleBar-info-name">Name</span>
                    <div className="titleBar-info-gz">
                        <span>关注：1</span>
                        <span>粉丝：0</span>
                    </div>
                </div>
                <div className="titleBar-icon">
                    <i className="iconfont icon-xiaoxizhongxin" />
                    <i className="iconfont icon-shezhi" />
                </div>
                <TabMenu current="my"/>
            </div>
        );
    }
}

export default Index;