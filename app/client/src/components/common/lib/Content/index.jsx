
import React from 'react'
import { Col } from '../Wrapper'

const Content = (props) => {
    return (
        <Col {...props} className={`${props.className}`} style={{ top: props.offset}} > { props.children } </Col>
    )
}
export default Content