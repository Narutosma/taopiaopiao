import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./tab-menu.scss";
import { Link } from "react-router-dom";

class TabMenu extends Component {
    render() {
        return (
            <div className="tab-menu">
                <Link to="/" className={`tab-menu-item ${this.props.current === "home" && "tab-menu-home"}` }>
                    {this.props.current === "home"?<i className="iconfont icon-shouye1" />: <i className="iconfont icon-shouye" />}
                    <span>首页</span>
                </Link>
                <Link to="/movie" className={`tab-menu-item ${this.props.current === "movie" && "tab-menu-movie"}`}>
                    {this.props.current === "movie"?<i className="iconfont icon-dianying1" />: <i className="iconfont icon-dianying" />}
                    <span>电影</span>
                </Link>
                <Link to="/show" className={`tab-menu-item ${this.props.current === "show" && "tab-menu-show"}`}>
                    {this.props.current === "show"?<i className="iconfont icon-yanchu1" />: <i className="iconfont icon-yanchu" />}
                    <span>演出</span>
                </Link>
                <Link to="/my" className={`tab-menu-item ${this.props.current === "my" && "tab-menu-my"}`}>
                    {this.props.current === "my"?<i className="iconfont icon-wode1" />: <i className="iconfont icon-wode" />}
                    <span>我的</span>
                </Link>
            </div>
        );
    }
}

TabMenu.propTypes = {
    current: PropTypes.string.isRequired
};

export default TabMenu;