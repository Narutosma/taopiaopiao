import React, { Component } from 'react'
import "./index.scss"
import DrapSeat from "./components/DrapSeat";

export default class index extends Component {
    state = {
        selectSeat: []
    }

    addSeat = (seat) => {
        this.setState({
            selectSeat: [seat, ...this.state.selectSeat]
        })
    }

    removeSeat = (id) => {
        this.setState({
            selectSeat: this.state.selectSeat.filter( seat => seat.id !== id)
        })
    }

    render() {
        const { selectSeat } = this.state;
        const buySea = selectSeat.map( seat => (<div className="ticket">
                            <div className="buy-seat">{seat.xPos}排{seat.yPos}座</div>
                            <div className="buy-price">33元</div>
                            <i className="iconfont icon-close" onClick={() => this.removeSeat(seat.id)}/>
                        </div>));
        return (
            <div className="buy">
                <div className="buy-top">
                    <i className="iconfont icon-fanhui" onClick={() => this.props.history.goBack()}/>
                    <span>万达IMAX国际影城</span>
                    <i className="iconfont icon-fenxiang"/>
                </div>
                <div className="buy-title">
                    <h3>长津湖</h3>
                    <div className="buy-title-time">今天 10-01 12:30 (国语2D)</div>
                </div>
                <div className="selectSeat">
                    <div className="seats" />
                    <div className="seat-content">
                        <div className="seat-scree">B10 银屏</div>
                        <div className="seat">
                        <DrapSeat selectSeat={this.state.selectSeat} addSeat={this.addSeat} removeSeat={this.removeSeat}/>
                        </div>
                    </div>
                </div>

                <div className="buy-select">
                    <div className="select-ticket">
                        { buySea }
                    </div>
                    <div className="buy-ticket">
                        <span>33元 确认选座</span>
                    </div>
                </div>
            </div>
        )
    }
}
