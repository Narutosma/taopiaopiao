import React, { Component } from 'react';
import WantMovie from "../WantMovie";
import "./index.scss";
import request from '../../../../API';

export default class index extends Component {

    state = {
        movies: []
    }

    componentDidMount(){
        this.getDate();
    }

    getDate = async () => {
        const data = await request("/wantsee");
        this.setState({
            movies: data.data
        });
    }

    render() {
        const movieList = this.state.movies.map(it => <WantMovie key={it.id} info={it}/>);
        return (
            <div className="wantSee">
                <h2>想看的电影</h2>
                { movieList }
                {/* <WantMovie />
                <WantMovie />
                <WantMovie />
                <WantMovie />
                <WantMovie />
                <WantMovie />
                <WantMovie />
                <WantMovie /> */}
            </div>
        )
    }
}
