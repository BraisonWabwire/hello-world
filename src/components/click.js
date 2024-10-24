import React, { Component } from 'react'

class Click extends Component {
    clickHandler(){
        console.log('The Button is clicked')
    }
    render() {
    return (
      <div><button onClick={this.clickHandler}>clickme</button></div>
    )
  }
}

export default Click