import React from "react";


const styles = {
  gameStlye: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',

    height: '100%',
    width: '75%'
  }

}


function Game(props) {

   
  return <div style={styles.gameStlye}>{props.children}</div>;

}

export default Game;