import React, { Component } from 'react'
import "./index.scss";
import ScoreComment from "./components/ScoreComment/index.js"
import Tags from "./components/Tags"
import CommentList from "./components/CommentList"
import request from "../../../../API";

export default class Comment extends Component {
    state = {
        tags: [],
        comments: [],
        currentTag: ""
    }

    componentDidMount() {
        this.getData();
    }
    

    getData = async () => {
        const data = await request("/av");
        const {tags, comments} = data.data;
        this.setState({
            tags,
            comments,
            currentTag: tags[0].code
        });
    }

    changeTag = (tag) => {
        this.setState({
            currentTag: tag
        });
    }

    render() {
        let {tags, comments, currentTag}= this.state;
        comments = comments.filter(it => it.tag === currentTag);
        return (
            <div className="comment">
                <ScoreComment />
                <Tags tags={tags} currentTag={currentTag} onChangeTag={this.changeTag}/>
                <CommentList comments={comments} />
            </div>
        )
    }
}
