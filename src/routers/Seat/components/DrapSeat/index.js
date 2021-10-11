import React, { Component } from 'react'
import { data } from "../../../../API/seat.json"
import seatEmptyImage from "../../resource/seat-empty.png";
import seatSoldImage from "../../resource/seat-sold.png";
import seatSelected from "../../resource/seat-selected.png";

const SEAT_WIDTH = 50;
const SEAT_HEIGHT = 50;
const ratio = window.devicePixelRatio;
const DRAW_SEAT_WIDTH = SEAT_WIDTH * ratio;
const DRAW_SEAT_HEIGHT = SEAT_HEIGHT * ratio;
const lastSeat = data[data.length - 1];
const CANVAS_WIDTH = lastSeat.colIndex * SEAT_WIDTH;
const CANVAS_HEIGHT = lastSeat.rowIndex * SEAT_HEIGHT;
const DRAW_CANVAS_WIDTH = CANVAS_WIDTH * ratio;
const DRAW_CANVAS_HEIGHT = CANVAS_HEIGHT * ratio;

let drap = React.createRef();
console.log();

export default class index extends Component {
    
    componentDidMount() {
        this.ctx = drap.current.getContext("2d");
        this.ctx.font = `${10 * ratio}px Arial`;
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';

        const emptyImage = new Image();
        const selectImage = new Image();
        const soldImage = new Image();
        let count = 0;
        
        const onLoadCallback = () => {
            count++;
            if(count === 3){
                this.emptyImage = emptyImage;
                this.selectImage = selectImage;
                this.soldImage = soldImage;
                this.drawAllSeat();
            }
        }

        emptyImage.onload = onLoadCallback;
        selectImage.onload = onLoadCallback;
        soldImage.onload = onLoadCallback;
        emptyImage.src = seatEmptyImage;
        selectImage.src = seatSelected;
        soldImage.src = seatSoldImage;
    }
    
    componentDidUpdate(prevProps, prevState) {
        this.ctx.clearRect(0, 0, DRAW_CANVAS_WIDTH, DRAW_CANVAS_HEIGHT);
        this.drawAllSeat(); // 画初始座位
        this.drawSelectSeat(); // 画已选择的座位
      }

      drawAllSeat = () => {
        for(let i = 0; i < data.length; i++){
            const offsetLeft = (data[i].xPos - 1) * DRAW_SEAT_WIDTH;
            const offsetTop = (data[i].yPos - 1) * DRAW_SEAT_HEIGHT;
            if (data[i].isSold) {
                // 绘制已售样式
                this.ctx.drawImage(this.soldImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
              } else {
                // 绘制空座样式
                this.ctx.drawImage(this.emptyImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
              }
        }
    }

    drawSelectSeat = () => {
        const { selectSeat } = this.props;
        for (let i = 0; i < selectSeat.length; i++) {
            const { xPos, yPos, rowIndex, colIndex } = selectSeat[i];
            const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
            const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
            this.ctx.drawImage(this.selectImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
            this.ctx.fillText(`${rowIndex}排`, offsetLeft + DRAW_SEAT_WIDTH / 2, offsetTop + DRAW_SEAT_HEIGHT / 2.5);
            this.ctx.fillText(`${colIndex}座`, offsetLeft + DRAW_SEAT_WIDTH / 2, offsetTop + DRAW_SEAT_HEIGHT * 2 / 3);
        }
    }

    clickSeat = (e) => {
        const {left, top} = drap.current.getBoundingClientRect();
        const xPos = Math.ceil((e.pageX - left)/SEAT_WIDTH);
        const yPos = Math.ceil((e.pageY - top)/SEAT_HEIGHT);

        const { selectSeat, addSeat, removeSeat } = this.props;

        const seat = data.find( seat => seat.xPos === xPos && seat.yPos === yPos);
        if(!seat || seat.isSold){
            return ;
        }

        const seatIndex = selectSeat.findIndex(item => item.id === seat.id);
        if(seatIndex > -1){
            removeSeat(seat.id);
        }else{
            // 座位选择数量超过四个
            if(selectSeat.length >= 4){
                alert("选座不能超过四个");
                return ;   
            }else{
                addSeat(seat);
            }
        }
    }
    

    render() {
        return (
            <div style={{overflowY: "scroll"}}>
                 <canvas onClick={ this.clickSeat } style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }} ref={drap} width={DRAW_CANVAS_WIDTH} height={DRAW_CANVAS_HEIGHT} />
            </div>
        )
    }
}
