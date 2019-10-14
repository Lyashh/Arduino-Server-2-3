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
        <Row className="m-t-80">
            <Col md={4}>
              <Row className="m-t-30">
                <Col md={6}>
                  <div className="icon-container">
                    <div className="in-block">
                      <p className="icon-title">Temperature</p>                      
                    </div>
                    <br/>
                      <div>
                        <img  className="float-l"src="img/icons/temperature.svg" width="90px" height="90px" alt="alt"/>
                        <p className="float-l icon-text">22</p>
                      </div>
                    
                  </div>
                </Col>
                <Col md={6}>
                
                  <div className="icon-container">
                    <div className="in-block">
                      <p className="icon-title">Humidity</p>
                    </div>
                    <br/>
                    <div>
                      <img className="float-l" src="img/icons/humidity1.svg" width="90px" height="90px" alt="alt"/>
                      <p className="float-l icon-text">22</p>
                    </div>
                    
                  </div>
                </Col>
                <Col md={6}>
                  <div className="icon-container">
                    <div className="in-block">
                      <p className="icon-title">Smoke</p>
                    </div>
                    <br/>
                    <div>
                      <img className="float-l" src="img/icons/co2.svg" width="90px" height="90px" alt="alt"/>
                      <p className="float-l icon-text">22</p>                      
                    </div>
                  </div>
                </Col>
                <Col md={6} >
                  <div className="icon-container">
                    <div className="in-block">
                      <p className="icon-title">Vibration</p>
                    </div>
                    <br/>
                    <div>
                      <img className="float-l" src="img/icons/vibration.svg" width="90px" height="90px" alt="alt"/>
                      <p className="float-l icon-text">22</p>                      
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col md={8} ref={el => this.scene = el} className="p-20">
                <div className="layer" data-depth="0.20">
                    <img src="servers.svg" width="90%" height="90%" alt="alt"/>
                </div>
            </Col>
        </Row>
      )
    }
  }
  
  export default Home
  