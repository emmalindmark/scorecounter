import React, { Component } from 'react';
import '../styles/Counter.css';

class Counter extends Component {
    constructor(props:number) {
        super(props);
        this.state = {
            count: 10
        }
    }

    render() {
        return (
            <div className="Counter">
                <p> This is a counter</p>
            </div>
        );
    }
}
export default Counter;