import React from 'react'

export default props => (
<span className=" float-xs-right">
    <button className="btn btn-primary ml-5" onClick={props.onClick}>
        <i className={props.icon}></i>
    </button>
</span>
)