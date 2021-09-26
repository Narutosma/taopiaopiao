import React, {Component} from 'react';
import TitleBar from "./components/TitleBar";
import ItemWrap from "./components/ItemWrap";
import WantSee from "./components/WantSee";
import "./index.scss";

class Index extends Component {
    render() {
        return (
            <div className="my">
                <ItemWrap><TitleBar/></ItemWrap>
                <ItemWrap>
                    <ul className="my-server frist">
                        <li>
                            <i className="iconfont icon-dianying1" />
                            电影票
                        </li>
                        <li>
                            <i className="iconfont icon-xiaoshi1" />
                            小食
                        </li>
                        <li>
                            <i className="iconfont icon-yanchu1" />
                            演出票
                        </li>
                    </ul>
                </ItemWrap>
                <ItemWrap>
                    <div className="my-serverlist">
                        <h3>我的服务</h3>
                        <ul className="my-server">
                        <li>
                            <i className="iconfont icon-youhuiquan" />
                            优惠券
                        </li>
                        <li>
                            <i className="iconfont icon-yingchengka" />
                            权益卡
                        </li>
                        <li>
                            <i className="iconfont icon-lipinka" />
                            乐影卡
                        </li>
                        <li>
                            <i className="iconfont icon-xiaomi" />
                            更多服务
                        </li>
                    </ul>
                    </div>
                </ItemWrap>
                <WantSee />
            </div>
        );
    }
}

Index.propTypes = {};

export default Index;