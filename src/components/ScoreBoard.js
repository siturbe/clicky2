import React from 'react';

const styles ={
  h2: {
    color: "white"
  }
}

function ScoreBoard(props) {
  return(
    <h2 style={styles.h2}><span>Score: {props.score} </span><span>Top Score: {props.topScore}</span></h2>
  )
}

export default ScoreBoard;