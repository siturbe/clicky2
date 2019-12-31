import React from 'react';

const styles ={
  h1: {
    color: "red"
  }
}

function Message(props) {
  return <h1 style={styles.h1}>{props.children}</h1>
}

export default Message;