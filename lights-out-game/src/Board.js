import React, { Component } from "react";
import Cell from "./Cell.js";
import "./Board.css";

class Board extends Component{
    constructor(props){
        super(props);
    }
    

    createBoard(){
        let board = [];
        return board;
    }


    flipCellAround(coord){
        let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    this.setState({board, hasWon});
    }

    render(){

        return(
            <table className="Board">
                <tbody>
                    <tr>
                        <Cell/>
                        <Cell/>
                        <Cell/>
                    </tr>
                </tbody>
            </table>

        )
    }
}









export default Board;