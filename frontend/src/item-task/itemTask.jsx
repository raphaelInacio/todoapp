import React from 'react'
import IconButton from '../icon-button/iconButton'


export default props => {

    const renderButton = () => {
        if (props.done === true){
            return (
            <div>
                <IconButton icon="icon-refresh" marginClass="mr-1" onClick={ props.markAsPending }/>
                <IconButton icon="icon-trash-o" marginClass="mr-1" onClick={ props.handleRemove } />
            </div>
            )
        } else {
            return (
            <div>
                <IconButton icon="icon-check"   marginClass="mr-1" onClick={ props.markAsDone }/>
                <IconButton icon="icon-trash-o" marginClass="mr-1" onClick={ props.handleRemove } />
            </div>
            )
        }
    }

    const styleDone = () => {
        return (`blockquote border-left-${props.itemDone} border-left-3`)
    }

    const styleDoneText = () => {
        if( props.done === true )
            return ( <p className="mb-0 text-muted"> <del>{ props.text } </del></p>)
        return <p className="mb-0 text-primary">{ props.text }</p>
    }

 return (
    <div>
        <div className="col-md-9"> 
            <blockquote className={styleDone()}>
               { styleDoneText() }
            </blockquote>
        </div>
        <div className="col-md-3">
           {renderButton()}
        </div>
    </div>
)}