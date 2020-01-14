import React, {Component} from 'react'

class Practice extends Component{
    constructor(){
        super()
        this.state = {
            inputValue: '',
            firstName: 'Lucas'
        } 
    }

    handleChange = e => {
        console.log(e.target)
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        this.setState({
            firstName: this.state.inputValue
        })
    }

    render(){
        console.log(this.state.inputValue)
        const {}
        return(
            <div>
                <input
                    placeholder='Enter First Name'
                    onChange={e=>this.handleChange(e)}
                    name='inputValue'
                />
                <button
                    onClick={this.handleSubmit}
                >Submit</button>
                <div>{this.state.firstName}</div>
            </div>
        )
    }
}

export default Practice