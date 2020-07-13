import React, {Component} from 'react';
import './tasks-item.css';

export default class TasksItem extends Component {
    render() {
        const {taskText, onDelete} = this.props;
        let classNames = 'tasks__item';
        return (
            <div className={classNames}>
                <label>
                    <input 
                        className="task__checkbox" 
                        type="checkbox" 
                        name="done"/>
                </label>
                <span className="task__descr">{taskText}</span>
                <button 
                    className="task__close"
                    onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        )
    }
}