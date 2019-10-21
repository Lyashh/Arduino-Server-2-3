import React from 'react'

import Home  from './comonents/Home'
import Info from './comonents/Info'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"



class App extends React.Component {
  render() {
    return(
      <Container fluid={true}>
          <Router>
								<Switch>   
                    <Route path="/" exact render={props => <Home  {...props} />} />
                    <Route path="/info" exact render={props => <Info  {...props} />} />
								</Switch>							
						</Router>
      </Container>
    )
  }
}

export default App
