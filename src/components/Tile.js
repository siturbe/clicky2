import React from 'react';

const styles = {
  Card:{
    width: '150px',
    height: '150px',
    margin: '10px'
  },
  Image: {
    height: '150px',
    width: '150px'
  }
}

function Tile(props) {
  const id = props.id;

  return (
      <div 
        className="card" 
        style={styles.Card}
        onClick={(e) => props.onClick(id, e)}>
        <img src={props.image} style={styles.Image} alt={props.id} />
      </div>
 
  )
    
}

export default Tile;