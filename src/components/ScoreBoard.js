import React from 'react';

function ScoreBoard(props) {
  return(
    <h1><span>Score: {props.score} </span><span>Top Score: {props.topScore}</span></h1>
  )
}

export default ScoreBoard;