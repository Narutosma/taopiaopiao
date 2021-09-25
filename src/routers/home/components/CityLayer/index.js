import React, {Component} from 'react';
import "./index.scss";
import PropTypes from "prop-types";
import request from "../../../../API"

class Index extends Component {

    static propTypes = {
        closeCityLayer: PropTypes.func.isRequired, // 关闭城市切换蒙层
        onSelect: PropTypes.func.isRequired // 切换城市
    }

    state = {
        allCity: {}
    }
    componentDidMount() {
        // getAllCity().then( res => {
        //     this.setState({
        //         allCity: res,
        //         ...this.state
        //     })
        // });

        this.getDate();
    }

    // 获取所有地区
    getDate = async () => {
        const res = await request("/allcity");
        this.setState({
            allCity: res.datas
        })
    }

    render() {
        const { allCity } = this.state;
        // 获取所有字母
        const allCityKeys = Object.keys(allCity);
        // 生成城市列表标签
        const cityList = allCityKeys.map( it => {
            return (
                <div key={it} className="cityList">
                    <div className="cityList-label" id={ it }>{ it }</div>
                    <ul className="cityList-wrap">
                        {allCity[it].map( item =>  <li key={item.cityCode} className="cityList-item" onClick={() => this.props.onSelect(item.regionName)}>{item.regionName}</li>)}
                    </ul>
                </div>
            );
        })

        // 生成所有字母跳转
        const letterJump = allCityKeys.map( it => {
            return <li className="cityIndex-item" key={it}>
                <a href={`#${it}`}>{ it }</a>
            </li>
        })

        return (
            <div className="cityLayer">
                <div className="cityLayer-title">
                    <div className="cityLayer-title-clone" onClick={this.props.closeCityLayer}>关闭</div>
                    选择城市
                </div>
                <div className="cityLayer-content">
                    <div className="cityLayer-search">
                        <input type="text" placeholder="输入城市名或拼音"/>
                    </div>
                    <div className="cityBody">
                        <div className="cityBody-label" id="定位">定位城市</div>
                        <div className="cityBody-wrap">
                            <div className="cityBody-item" onClick={() => this.props.onSelect("长沙")}>长沙</div>
                        </div>
                    </div>
                    <div className="cityBody">
                        <div className="cityBody-label" id="热门">热门城市</div>
                        <div className="cityBody-wrap">
                            <div className="cityBody-item"  onClick={() => this.props.onSelect("长沙")}>长沙</div>
                            <div className="cityBody-item" onClick={() => this.props.onSelect("上海")}>上海</div>
                            <div className="cityBody-item" onClick={() => this.props.onSelect("重庆")}>重庆</div>
                            <div className="cityBody-item" onClick={() => this.props.onSelect("成都")}>成都</div>
                            <div className="cityBody-item" onClick={() => this.props.onSelect("厦门")}>厦门</div>
                        </div>
                    </div>
                    {/* 城市 */}
                    { cityList }
                    <ul className="cityIndex">
                        <li className="cityIndex-item">
                            <a href="#定位">定位</a>
                        </li>
                        <li className="cityIndex-item">
                            <a href="#热门">热门</a>
                        </li>
                        {/* 字母跳转 */}
                        { letterJump }
                    </ul>
                </div>
            </div>
        );
    }
}


export default Index;