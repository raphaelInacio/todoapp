import React from 'react'
import IconButton from '../icon-button/iconButton'

export default props => (
    <div>
        <div className="col-md-9"> 
            <blockquote className="blockquote border-left-primary border-left-3">
                <p className="mb-0">{ props.text }</p>
            </blockquote>
        </div>
        <div className="col-md-3">
            <IconButton icon="icon-check" marginClass="mr-1"/>
            <IconButton icon="icon-trash-o" marginClass="mr-1"/>
            <IconButton icon="icon-refresh" marginClass="mr-1"/>
        </div>
    </div>
)