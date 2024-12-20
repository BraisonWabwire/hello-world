import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         comments:"",
         topic:""
      }
    }
    HandleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    HandleTopicChange=(event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    HandleSubmitEvent=(event)=>{
        alert(`${this.state.username},${this.state.comments},${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    const {username,comments,topic}=this.state
    return (
      <div>
        <form onSubmit={this.HandleSubmitEvent}>
            <div>
            <label>username</label>
            <input type='text' value={username} onChange={this.HandleUsernameChange}></input>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.HandleTopicChange}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>

                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form