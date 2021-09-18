import React, {Component} from 'react';
import "./index.scss"
import Test from "../../components/Test";
// 头部工具栏
import ToolBar from "../../components/ToolBar"

class Index extends Component {

    // 城市切换点击事件
    cityLayer = () => {
        console.log("city change layer");
    };

    render() {
        return (
            <div>
                <ToolBar city="上海" cityLayer={this.cityLayer} day={18} />
                <h1 className="home">首页</h1>
                <Test/>
            </div>
        );
    }
}

export default Index;