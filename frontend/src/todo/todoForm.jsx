import React from 'react'
import IconButton from '../icon-button/iconButton'
import CardHeader from '../card-header/cardHeader'

export default props => (
			<div className="card">
			<CardHeader icon="icon-pencil-square-o" text="Cadastro de Tarefas"/>
				<div className="card-body">
					<div className="card-block">
						<form className="form">
							<div className="form-body">
								<div className="row">
									<div className="col-md-9">
										<div className="form-group">
											<input type="text" 
											id="nome" 
											className="form-control" 
											placeholder="insira o nome da tarefa" 
											name="nome" 
											onChange={props.handleChange}
											value={props.description}/>
										</div>
									</div>
                                    <div className="col-md-3">
										<IconButton icon="icon-plus-square" onClick={props.handleAdd} />
                                    </div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
)