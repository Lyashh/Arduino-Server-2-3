import React from 'react'
import Home  from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    
    return(
      <Container fluid={true}>
          <Home />
      </Container>
    )
  }
}

export default App
