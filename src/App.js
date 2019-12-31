import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Tile from "./components/Tile";
import tiles from "./tiles";

import "./App.css";

const styles = {
  AppStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles,
      tilesArray: new Array(12).fill(false),
      score: "0",
      topScore: "0",
      guessCorrectly: true,
      message: "Click a Driver to Begin"
    };
    this.handleTileClick = this.handleTileClick.bind(this);
  }

  handleTileClick(id, e) {
    //Output message
    const message = this.state.tilesArray[id]
      ? " You Guessed Incorrectly"
      : "You Guessed Correctly";

    if (this.state.tilesArray[id] === false) {
      const tilesArray = this.state.tilesArray;
      tilesArray[id] = true;

      //change score and topScore
      this.setState(state => ({
        score: parseInt(state.score) + 1,
        topScore:
          parseInt(state.topScore) > parseInt(state.score)
            ? parseInt(state.topScore)
            : parseInt(state.topScore) + 1,
        message,
        tilesArray
      }));
      console.log(id);
    } else {
      const tilesArray = new Array(12).fill(false);

      //change score
      this.setState(state => ({
        score: "0",
        topScore: state.topScore,
        message,
        tilesArray
      }));
    }

    //calll mixUpTitles
  }

  mixUpTiles(arr) {
    //mix up tiles
    return arr.sort(() => Math.random() - 0.5);
  }

  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <div style={styles.AppStyle}>
          <Game>
            {this.mixUpTiles(this.state.tiles).map(tile => (
              <Tile
                onClick={this.handleTileClick}
                key={tile.id}
                id={tile.id}
                name={tile.id}
                image={tile.image}
              />
            ))}
          </Game>
        </div>
      </div>
    );
  }
}

export default App;