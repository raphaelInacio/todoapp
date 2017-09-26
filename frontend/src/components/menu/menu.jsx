import React from 'react'

export default props =>(
     <nav role="navigation" class="header-navbar navbar navbar-with-menu navbar-fixed-top navbar-light navbar-shadow">
      <div class="navbar-wrapper">

        <div class="navbar-header">
          <ul class="nav navbar-nav">
            <li class="nav-item">
                <a href="#/todos" class="navbar-brand nav-link">
                <i class="icon-check-square-o"></i>TodoApp
                </a>
            </li>
          </ul>
        </div>
          <div class="navbar-container content container-fluid">
              <div class="collapse navbar-toggleable-sm" id="navbar-mobile">
                    <ul class="nav navbar-nav">
                    <li class="nav-item hidden-sm-down"><a href="#/todos" class="nav-link">Todo</a></li>
                    <li class="nav-item hidden-sm-down"><a href="#/sobre" class="nav-link">Sobre</a></li>
                </ul>
              </div>
          </div>
      </div>  
    </nav>
)
