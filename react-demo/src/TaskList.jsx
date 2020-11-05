import React, {Component} from 'react';
import TaskItems from './TaskItems';

class TaskList extends Component{
    constructor(){
        super()
        this.state = {
        }
    }
    render(){
        const {title, tasks, buttonFunction} =this.props;
        const taskItems = tasks.map((task)=> <TaskItems key={task} tasks={task} buttonFunction={buttonFunction}/>)
        return (
            <div>
                {title}
                {taskItems}
            </div>
        )
    }
}

export default TaskList;