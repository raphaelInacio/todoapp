import React, {Component} from 'react'
import ContentHeader from '../content-header/content-header'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(e){
        e.preventDefault();
        console.log('The link was clicked.', this);
    }

    render() {
        return (
            <div className="content-wrapper">
            <ContentHeader title="Tarefas" pageCurrent="Todo" link="#/todos"/>
            <TodoForm 
                handleChange={this.handleChange}
                handleAdd={this.handleAdd} 
                description={this.state.description}/>
            <TodoList/>
            </div>
        )
    }
}