import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../icon-button/iconButton'
import CardHeader from '../card-header/cardHeader'
import { changeDescription } from './todoActions'

const TodoForm = props => (
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
											onChange={ props.changeDescription }
											value={ props.description }/>
										</div>
									</div>
                                    <div className="col-md-3">
										<IconButton icon="icon-plus-square" marginClass="mr-1"  onClick={ props.handleAdd } />
										<IconButton icon="icon-search5" marginClass="mr-1"  onClick={ props.handleSearch }  />
                                    </div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
)

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps) (TodoForm)