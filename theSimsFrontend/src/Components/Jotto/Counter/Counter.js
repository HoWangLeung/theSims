import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux';
import { incrementAsync } from './action/CounterAction'
class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    handleAdd = () => {
        this.props.incrementAsync()
    }

    handleMinus = () => {
        this.props.decrementAsync()
    }


    render() {
        return (
            <div style={{ display: "flex" }}>
                <h3>Count: {this.props.count}</h3>


                <Button onClick={this.handleAdd}>
                    ADD
               </Button>

                <Button onClick={this.handleMinus}>
                    Minus
               </Button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    
    return {
        count: state.CounterReducer.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementAsync: () => dispatch({ type: 'INCREMENT' }),
        decrementAsync:() => dispatch({ type: 'DECREMENT'}),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)