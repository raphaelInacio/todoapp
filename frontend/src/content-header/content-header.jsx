import React from 'react'
import BreadCrumbs from '../breadcrumbs/breadcrumbs'

export default props => (
     <div className="content-header row">
        <div className="content-header-left col-md-6 col-xs-12 mb-1">
            <h2 className="content-header-title">{props.title}</h2>
        </div>
        <BreadCrumbs pageCurrent={props.pageCurrent} link={props.link}/>
    </div>
)

