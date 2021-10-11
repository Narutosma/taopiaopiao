import React, { Component } from 'react'
import "./index.scss";
import FullText from "../../../FullText"
import avatar from '../../../../../../assest/avatar.png'
import Star from '../../../../../../components/Star';
import PropTypes from "prop-types";
export default class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    getDate(time){
        const date = new Date(+time);
        const m = (date.getMonth() + 1).toString().padStart(2, 0);
        const d = date.getDay().toString().padStart(2, 0);
        const h = date.getHours().toString().padStart(2, 0);
        const min = date.getMinutes().toString().padStart(2, 0);
        return `${m}-${d} ${h}:${min}`
    
    }

    render() {
        this.getDate(1632581807);
        const comments = this.props.comments.map((it, i) => (
            <li className="comment-item" key={i}>
                    <div className="comment-user">
                        <div className="comment-user-avatar" style={{backgroundImage: `url(${avatar})`}}/>
                        <div className="comment-user-info">
                            <div className="user-name">{it.nickName}</div>
                            <div className="user-score">
                                <Star size={10} value={+it.star/2}/>
                                <span>{it.star + ".0"}</span>
                            </div>
                        </div>
                    </div>
                    <div className="comment-content">
                        <FullText>
                        {it.content}
                        </FullText>
                    </div>
                    <div className="comment-other">
                        <div className="comment-time">{this.getDate(it.commentTime)}</div>
                        <div className="zan">
                            <i className="iconfont icon-dianzan"/>{it.zan}
                        </div>
                    </div>
                </li>
        ))
        return (
            <ul className="commentList">    
                { comments }
            </ul>
        )
    }
}
