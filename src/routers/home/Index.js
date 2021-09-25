import React, {Component} from 'react';
import "./index.scss"
// 头部工具栏
import ToolBar from "./components/ToolBar";
// 轮播图区域
import Slider from "./components/Slider";
// 电影列表
import MovieItem from "./components/MovieItem"
// 菜单栏
import TabMenu from "../../components/TabMenu"
// 切换城市页面
import CityLayer from "./components/CityLayer";
// render to body
import RenderToBody from "../../components/RenderToBody";


// API
import request from "../../API/index";

class Index extends Component {

    state = {
        movie: [],
        visibleCityLayer: false,
        city: "长沙"
    }

    // 城市切换点击事件
    cityLayer = () => {
        this.setState({
            visibleCityLayer: true
        })
    };

    // 关闭城市切换蒙层
    onCityLayerClose = () => {
        this.setState({
            visibleCityLayer: false
        })
    }

    // 切换城市
    onChangeCity = ( city ) => {
        this.setState({
            city
        })
        this.onCityLayerClose();
    }

    componentDidMount() {
        // 获取热门电影目录
        this.getMovie();
    }

    // 热门电影列表
    getMovie = async () => {
        const data = await request("/hotmovie");
        this.setState({
            movie: data.data
        })
    }

    render() {
        const { movie } = this.state;

        // 热门电影列表
        const movieList = movie.map( it => <MovieItem key={it.id} movieInfo={it} />);
        // const a = movie.map(it => {
        //     return {
        //         id: it.id,
        //         director: it.director,
        //         remark: it.remark,
        //         showMark: it.showMark,
        //         type: it.type,
        //         showName: it.showName,
        //         poster: "https://gw.alicdn.com/" + it.poster,
        //         leadingRole: it.leadingRole,
        //         scoreAndFavor: it.scoreAndFavor
        //     }
        // });
        // console.log(a);
        return (
            <div>
                <ToolBar city={this.state.city} cityLayer={this.cityLayer} day={18} />
                <div className="home_slide">
                    <div className="home_slideWrap">
                        <Slider />
                    </div>
                </div>
                <div className="home_movie">
                    { movieList }
                </div>
                <TabMenu current="home"/>
                {this.state.visibleCityLayer && <RenderToBody><CityLayer closeCityLayer={this.onCityLayerClose} onSelect={ this.onChangeCity }/></RenderToBody>}
            </div>
        );
    }
}

export default Index;