import React, {Component} from 'react';
import './app.css';

import AppHeader from '../app-header/app-header.js'
import TasksAddForm from '../tasks-add-form/tasks-add-form.js'
import TasksList from '../tasks-list/tasks-list.js'

export default class App extends Component { 
  	constructor(props) {
        super(props);
        this.state = {
			data : []
		}
		this.deleteTasksItem = this.deleteTasksItem.bind(this);
		this.addTasksItem = this.addTasksItem.bind(this);
		this.maxId = 4;
	}

	deleteTasksItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id); 
            const before = data.slice(0, index); 
            const after = data.slice(index + 1);

            const newData = [...before, ...after];

            return {
                data: newData
            }
        });
	}

	addTasksItem(text) {
        const newTask = {
            taskText: text,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newData = [...data, newTask];
            return {
                data: newData
            }
        })
	}
	
  	render () {
		const {data} = this.state;

    	return (
			<div className="app">
				<AppHeader/>
				<TasksAddForm
					onAdd={this.addTasksItem}/>
				<TasksList
					data={data}
					onDelete={this.deleteTasksItem} />
			</div>
      	)
  	}
}  

