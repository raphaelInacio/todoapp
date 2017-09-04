import React, {Component} from 'react'
import ContentHeader from '../content-header/content-header'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    render() {
        return (
            <div className="content-wrapper">
            <ContentHeader title="Tarefas" pageCurrent="Todo" link="#/todos"/>
            <TodoForm/>
            <TodoList/>
            </div>
        )
    }
}