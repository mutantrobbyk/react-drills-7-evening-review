// Display the update functionality
import React from 'react'

class Update extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            task: props.data.task,
            description: props.data.description, 
            editing: false
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    toggleEdit=() => {
        this.setState({
            editing: !this.state.editing
        })
    }
    render(){
        console.log(this.props)
        console.log(this.state)
        const{id} = this.props.data
        const {task, description} = this.state
        return(
            <div>
                {!this.state.editing ?
                (<div>
                    <button onClick={this.toggleEdit}>Update Me</button>
                </div>):(
                    <div><input name='task' onChange={e => this.handleChange(e)} value={task} type="text"/>
                    <input name='description' onChange={e => this.handleChange(e)} value={description} type="text"/>
                    <button onClick={this.toggleEdit}>Cancel</button>
                    <button onClick={() => {
                    this.props.update(id, task, description)
                    this.toggleEdit()
                    }}>Submit Changes</button></div>
                )}
            </div>
        )
    }
}
export default Update

