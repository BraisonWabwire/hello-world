import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello you have successfully loggedin'
      }
    }
    clickHandler(){
        this.setState({
            message:'Goodbye you have logged out'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>logout</button>
      </div>
    )
  }
}

export default EventBinding