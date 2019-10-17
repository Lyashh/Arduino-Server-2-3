import React from 'react'
import Parallax from 'parallax-js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col } from 'react-bootstrap'
import  Socket from './socket'

class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        temperature: 0,
        humidity: 0,
        vibration: false,
        smoke: 0
      } 
    }

    componentDidMount() {
        this.parallax = new Parallax(this.scene)
        Socket.on('sensors', (sensor) => {
          if(sensor.title == 'Temperature') {
            this.setState({temperature: sensor.value})
          } 

          else if(sensor.title == 'Humidity') {
            this.setState({humidity: sensor.value})
          } 

          else if(sensor.title == 'Vibration') {
            this.setState({vibration: sensor.value})
            setTimeout(() => {
              this.setState({vibration: false})
            }, 4000);
          } 

          else if(sensor.title == 'Smoke') {
            this.setState({smoke: sensor.value})
          } 

        })
      }
      componentWillUnmount() {
        this.parallax.disable()
      }
  
    render() {
      const haveVibratiom = (
        <p className="float-l icon-text m-l-0 text-red">Warning!</p>
      )
      const notVibrate = (
        <p className="float-l icon-text m-l-0 text-green">OK</p>
      )
      return(
        <Row className="m-t-80">
            <Col md={4} sm={12}>
              <Row className="m-t-30">
                <Col md={6}>
                  <div className="icon-container">
                    <div className="in-block">
                      <p className="icon-title">Temperature</p>                      
                    </div>
                    <br/>
                      <div>
                        <img  className="in-block" src="img/icons/temperature.svg" width="90px" height="90px" alt="alt"/>
                        <br/>
                        <p className="icon-text">{this.state.temperature}℃</p>
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
                      <img className="in-block" src="img/icons/humidity1.svg" width="90px" height="90px" alt="alt"/>
                      <br/>
                      <p className="icon-text">{this.state.humidity}%</p>
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
                      <img className="in-block" src="img/icons/co2.svg" width="90px" height="90px" alt="alt"/>
                      <br/>
                      <p className=" icon-text">{this.state.smoke}</p>                      
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
                      <img className="in-block" src="img/icons/vibration.svg" width="90px" height="90px" alt="alt"/>
                      <br/>
                        {this.state.vibration ? haveVibratiom : notVibrate}
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
  