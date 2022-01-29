import React, { Component } from 'react'
import Paragraph from './Paragraph'

export default class ShowHide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    componentDidUpdate() {
        if(this.state.isShow){
            alert("Component open")
        }
        else{
            alert("Сomponent closed")
        }
    }
    render() {
        return (
            <div>
                <p>
                    <button onClick={this.handleClick}>Show/Hide</button>
                </p>
                {this.state.isShow ? <Paragraph /> : <div />}
            </div>
        )
    }
}
