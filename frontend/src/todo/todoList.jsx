import React from 'react'
import IconButton from '../icon-button/iconButton'
export default props => (
  <div className="card">
				<div className="card-header">
					 <h4 className="card-title"><i className="icon-check-square-o"></i> Minhas tarefas</h4>
				</div>
				<div className="card-body collapse in">
					<div className="card-block">
						<ul className="list-group">
							<li className="list-group-item">
								Cras justo odio
								<IconButton icon="icon-check"/>
								<IconButton icon="icon-trash-o"/>
								<IconButton icon="icon-refresh"/>
							</li>
						</ul>
					</div>
				</div>
			</div>
)