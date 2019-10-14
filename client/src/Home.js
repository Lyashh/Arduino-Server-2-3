import React from 'react'
import Parallax from 'parallax-js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col } from 'react-bootstrap'



class Home extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
        this.parallax = new Parallax(this.scene)
      }
      componentWillUnmount() {
        this.parallax.disable()
      }
  
    render() {
      return(
        <Row >
            <Col md={2}></Col>
            <Col md={8} ref={el => this.scene = el}>
                <div className="layer" data-depth="0.20">
                    <img src="servers.svg" width="100%" height="100%" alt="image description"/>
                </div>
            </Col>
            <Col md={2}></Col>

           
        </Row>
      )
    }
  }
  
  export default Home
  