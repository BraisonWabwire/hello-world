import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello you have successfully loggedin'
      }
    //   this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye you have logged out'
    //     })
    // }

    clickHandler=()=>{
        this.setState({
            message:'Logged out throug arrow function'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>logout</button> */}
        {/* <button onClick={()=>this.clickHandler()}>logout</button> */}
        <button onClick={this.clickHandler}>logout</button>
      </div>
    )
  }
}

export default EventBinding