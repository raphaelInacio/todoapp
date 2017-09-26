import React from 'react'
import { connect } from 'react-redux'

import CardHeader from '../components/card-header/cardHeader'
import ItemTask from '../components/item-task/itemTask'

const TodoList  = props => {

const renderRows = () => {
    const list = props.list || []

    if( props.list.length >= 1 ){
        return list.map( todo => (
            <ItemTask 
            done={todo.done}
            itemDone={todo.done ? '' : 'primary'}
            text={ todo.description} 
            key={ todo._id } 
            handleRemove={() => props.handleRemove(todo) }
            markAsDone={() => props.markAsDone(todo)}
            markAsPending={() => props.markAsPending(todo)} />
        ))
    } else {
        return (
            <div className="alert alert-primary no-border mb-2" role="alert">
                <strong>Não acredito!</strong> Você ainda não criou nehuma tarefa.
            </div>
        )
    }

}
 
return (<div className="card">
    <CardHeader icon="icon-check-square-o" text="Minhas tarefas"/>
    <div className="card-body collapse in">
        <div className="card-block">
            {renderRows()}
        </div>
    </div>
</div>

)}

const mapStateToProps = state => ({list: state.todo.list})
export default connect(mapStateToProps)(TodoList)