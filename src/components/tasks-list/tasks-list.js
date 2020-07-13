import React from 'react';
import TasksItem from '../tasks-item/tasks-item.js';
import './tasks-list.css';

const TasksList = ({data, onDelete}) => {

    const elements = data.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id} className="tasks__item">
                <TasksItem 
                    {...itemProps} 
                    onDelete={() => onDelete(id)} />
            </li>
        )
    });

    return (
        <ul className="tasks__list">
            {elements}
        </ul>
    )
}

export default TasksList;
