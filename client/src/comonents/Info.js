import React from 'react'
import { Link } from "react-router-dom"
import {Row, Col } from 'react-bootstrap'


class Info extends React.Component {
  render() {
    return(
        <Row >
            <Col md={1} className="layer">
                <Link to="/">
                    <img src="img/icons/previous.svg" className="arrow-flip" width="50px" height="50px" alt="alt"/>
                </Link>
            </Col>
            <Col md={5}></Col>
            <Col md={6}></Col>
           
        </Row>
    )
  }
}

export default Info
