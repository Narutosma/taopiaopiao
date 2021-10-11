import React, { Component } from 'react'
import request from '../../../../API'
import "./index.scss"

export default class Article extends Component {
    state = {
        articleList: []
    }
    componentDidMount(){
        this.getArticle();
    }

    getArticle = async () => {
        const data = await request("/article");
        this.setState({
            articleList: data.data
        });
    }
    render() {
        const {articleList} = this.state;
        const article = articleList.map(it => {
            return (
                <li key={it.id}>
                    <a href="#xx">
                        <div className="poster" style={{backgroundImage: `url(${it.avatar})`}}/>
                        <dl>
                            <dt>{it.artisteName}</dt>
                            <dd>{it.profession}</dd>
                        </dl>
                    </a>
                </li>
            );
        });
        return (
            <div className="articleInfo">
                <ul className="article-list">
                   {article}
                </ul>
            </div>
        )
    }
}
