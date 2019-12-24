import React from "react";
import Square from './card/Square';
import CardArray from './CardArray';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(16).fill(null),
        };
    }

    handleClick(i){
        const squares = this.state.squares;
        squares[i] = CardArray[i].image;
        this.setState({squares: squares});
    }

    renderSquare(i) {
      return (
        <Square 
            value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}
        />
        );
    }
  
    render() {
  
      return (
        <div className="md-10 offset-2">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
          <div className="board-row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
          </div>
          <div className="board-row">
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
          </div>
          <div className="board-row">
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(16)}
          </div>
        </div>
      );
    }
  }

  export default Board;