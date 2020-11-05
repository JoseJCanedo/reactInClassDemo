import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: ['item2'],
            doneList: ['one'],
            task: ''
        }
    }
    render(){
        return (
            <div className="App">
                <h1>To-do List</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input 
                        type='text'
                        className='input'
                        placeholder='Enter Item'
                        value={this.state.task}
                        onChange={(e) => this.setState({task: e.target.value})}
                        />
                    <button type='submit'>Add Todo</button>
                </form>
                <TaskList title={'Pending Todo'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.deleteItem} />
                <TaskList title={'Completed'} buttonText={"Delete"} tasks={this.state.doneList} buttonFunction={this.markComplete} />
            </div>
        );
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({ todoList: [...this.state.todoList, this.state.task], task: ''});
    }
    deleteItem = key => {
        let taskList = this.state.todoList;
        var index = taskList.indexOf(key);
        if (index > -1) {
            taskList.splice(index, 1);
        }
        this.setState({todoList: taskList, doneList: [...this.state.doneList, key]});
    }
    markComplete = key => {
        let done = this.state.doneList;
        var index = done.indexOf(key);
        if (index > -1) {
            done.splice(index, 1);
        }
        this.setState({doneList:done});
    }
}

export default App;
