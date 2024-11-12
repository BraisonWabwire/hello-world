import React, { Component } from 'react'
import MemoComp from './components/MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Braison'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Braison'
            })
        }, 2000)
    }
    render() {
        console.log('*******This is from a parent component*******')
        return (
            <div>
                <div> ParentComp</div>
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp