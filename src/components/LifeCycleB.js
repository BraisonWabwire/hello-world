import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'braison'
      }
      console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps ')
        return null;
    }
    componentDidMount(){
    console.log('LifeCycleB componentDidMount');
    }
    shouldComponentUpdate(){
      console.log('LifecycleB ShouldComponentUpdate')
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifecycleB getSnapshotBeforeUpdate')
      return null
    }
    componentDidUpdate(){
      console.log('LifecycleB componentDidUpdate')
    }
  render() {
    console.log('LifeCycleB Render');
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB