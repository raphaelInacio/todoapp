import React, {Component} from 'react'
import Axios from 'axios'

import ContentHeader from '../content-header/content-header'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.markAsDone = this.markAsDone.bind(this)
        this.markAsPending = this.markAsPending.bind(this)
        this.refresh()
    }

    refresh(){
        Axios
        .get(`${URL}?sort=-createdAt`)
        .then(resp => {
            this.setState({...this.state, description: '', list: resp.data})
        })
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(e){
        const description = this.state.description
        Axios
        .post(URL, {description})
        .then(resp => this.refresh())
        e.preventDefault();
        console.log(this.state.description);
    }

    handleRemove(todo){
        console.log('Removendo item', todo);
         Axios
        .delete(`${URL}/${todo._id}`)
        .then(resp => this.refresh())
    }

    markAsDone(todo){
        console.log('Concluindo item', todo);
        Axios
        .put(`${URL}/${todo._id}`, {...todo, done: true})
        .then(resp => this.refresh())
    }

    markAsPending(todo) {
        console.log('Atualizando item', todo);
        Axios
        .put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(resp => this.refresh())
    }

    render() {
        return (
            <div className="content-wrapper">
            <ContentHeader title="Tarefas" pageCurrent="Todo" link="#/todos"/>
            <TodoForm 
                handleChange={this.handleChange}
                handleAdd={this.handleAdd} 
                description={this.state.description}/>
            <TodoList 
                list={this.state.list} 
                handleRemove={this.handleRemove}
                markAsDone={this.markAsDone}
                markAsPending={this.markAsPending} />
            </div>
        )
    }
}