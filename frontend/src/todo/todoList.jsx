import React from 'react'
import CardHeader from '../card-header/cardHeader'
import ItemTask from '../item-task/itemTask'

export default props => (
<div className="card">
    <CardHeader icon="icon-check-square-o" text="Minhas tarefas"/>
    <div className="card-body collapse in">
        <div className="card-block">
            <ItemTask text="Estudar React e Redux."/>
        </div>
    </div>
</div>
)