import React from 'react'

export default props => (
			<div className="card">
				<div className="card-header">
                    <h4 className="card-title"><i className="icon-pencil-square-o"></i> Cadastro de Tarefas</h4>
				</div>
				<div className="card-body">
					<div className="card-block">
						<form className="form">
							<div className="form-body">
								<div className="row">
									<div className="col-md-9">
										<div className="form-group">
											<input type="text" id="projectinput1" className="form-control" placeholder="insira o nome da tarefa" name="fname"/>
										</div>
									</div>
                                    <div className="col-md-3">
								        <button className="btn btn-primary">
									        <i className="icon-plus-square"></i> Add
								        </button>
                                    </div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
)