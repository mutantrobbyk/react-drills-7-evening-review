//This will be where we add a new task into our list
import React from 'react'

export default class NewTask extends React.Component{
    state = {
        task: '',
        description: '',
        id: 0
    }
    handleChange = (e) => {
        this.setState({
            [e.target.placeholder]: e.target.value
        })
    }
    createNewObject = () => {
        const obj = {
            task: this.state.task,
            description: this.state.description,
            id: this.state.id
        }
        this.setState({
            id: this.state.id + 1,
            task: '',
            description:''
        })
        this.props.set(obj)
    }
    render(){
        // console.log('id',this.state.id)
        return(
            <div>
                <input value={this.state.task} onChange={e=> this.handleChange(e)} placeholder='task' type="text"/>
                <input value={this.state.description} onChange={e=> this.handleChange(e)} placeholder='description' type="text"/>
                <button onClick={this.createNewObject}>Submit Task</button>
            </div>
        )
    }
}