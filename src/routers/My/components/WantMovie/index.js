import React from 'react'
import PropTypes from "prop-types";
import "./index.scss";


export default function index(props) {
    const { wantCount, showName, leadingRole, poster, openTime } = props.info;
    // 演员
    const actor = leadingRole.split(",").slice(0, 3).join(" ");
    // 想看的人数
    var str = wantCount.toString();
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    const wantNum = str.replace(reg,"$1,");
    
    return (
        <div className="movie-item">
            <div className="movie-item-cover">
                <img src={poster} alt="" />
            </div>
            <div className="movie-item-info">
                <div className="movie-item-name">{showName}</div>
                <div className="movie-item-want"><span>{wantNum}</span> 想看</div>
                <div className="movie-item-actor">{actor}</div>
                <div className="movie-item-date">{openTime} 上映</div>
            </div>
        </div>
    )
}

index.propTypes = {
    info: PropTypes.object.isRequired 
}
