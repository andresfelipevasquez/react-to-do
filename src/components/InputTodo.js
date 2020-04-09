import React, {Component} from 'react'

class InputTodo extends Component{
    state = {
        title: ""
      };

    onChange = (e) => {
        this.setState({
            // Permite reutilizar el método cuando se tienen diferentes campos
            [e.target.name]: e.target.value
        })
        
      }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title)
        this.setState({
            title: ""
        });
        
    } 

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                    name="title"
                />
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default InputTodo