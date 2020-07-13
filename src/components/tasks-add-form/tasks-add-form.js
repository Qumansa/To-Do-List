import React, {Component} from 'react';
import './tasks-add-form.css';

export default class TasksAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '' 
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) { 
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onAdd(this.state.text);
        this.setState({
            text: '' 
        });
    }

    render() {
        return (
            <form 
                className="form"
                onSubmit={this.onSubmit}>
                <input 
                    className="form__input" 
                    type="text"
                    placeholder="Write a task"
                    onChange={this.onValueChange}
                    value={this.state.text}/>
                <button 
                    className="form__button" 
                    type="submit">
                        Add
                </button>
            </form>
        )
    }
}