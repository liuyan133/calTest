import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    
    increment = ()=>{
        const {value} = this.seletNumber
        store.dispatch({type:'increment',data:value*1})
    }
    decrement = ()=>{
        const {value} = this.seletNumber
        store.dispatch({type:'decrement',data:value*1})
    }
    incrementIfOdd = ()=>{
        const {value} = this.seletNumber
        const count = store.getState()
        if(count % 2 !== 0){
            store.dispatch({type:'increment',data:value*1})
        }       
    }
    incrementAsync = ()=>{
        const {value} = this.seletNumber
        setTimeout(()=>{
            store.dispatch({type:'increment',data:value*1})
        },500)
    }

    render() {
        return (
            <div>
                <h2>数字的和为:{store.getState()}</h2>
                <select ref={ c => this.seletNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>奇数+</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步+</button>
            </div>
        )
    }
}
