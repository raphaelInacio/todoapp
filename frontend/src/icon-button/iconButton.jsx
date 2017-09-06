import React from 'react'

export default props => (
<span className={ props.marginClass }>
    <button className="btn btn-primary ml-5" onClick={props.onClick}>
        <i className={ props.icon }>{ props.text }</i>
    </button>
</span>
)