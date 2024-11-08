import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'braison'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps ')
        return null;
    }
    componentDidMount(){
    console.log('LifeCycleA componentDidMount');
    }
    shouldComponentUpdate(){
      console.log('LifecycleA ShouldComponentUpdate')
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifecycleA getSnapshotBeforeUpdate')
      return null
    }
    componentDidUpdate(){
      console.log('LifecycleA componentDidUpdate')
    }
    changeState=()=>{
      this.setState({
        name:"Code Evolution"
      })
    }
  render() {
    console.log('LifeCycleA Render');
    return (
        <div>
            <div>LifeCycleA</div>
            <LifeCycleB></LifeCycleB>
            <button onClick={this.changeState}>Change state</button>
        </div>
    )
  }
}

export default LifeCycleA