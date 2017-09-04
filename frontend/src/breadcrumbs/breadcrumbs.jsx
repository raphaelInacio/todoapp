import React from 'react'

export default props =>
         (
            <div className="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
            <div className="breadcrumb-wrapper col-xs-12">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">TodoApp</a></li>
                <li className="breadcrumb-item"><a href="{props.link}">{props.pageCurrent}</a></li>
                </ol>
            </div>
        </div>
        )
    
