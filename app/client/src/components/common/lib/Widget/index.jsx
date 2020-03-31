
import React, { memo, Component, useEffect } from 'react'
import { Widget, renderCustomComponent, addUserMessage } from 'react-chat-widget'
import { Col } from "../Wrapper"
import _ from 'lodash'
import './styles.scss'
import 'react-chat-widget/lib/styles.css'







class Reply extends Component {

    constructor(props) {
        super(props);
    }

    sendQuickReply = (reply) => {
        console.log(this.props); //returns empty object
        this.props.correct(reply);  
    };

    render() {
        return [0, 1, 2, 3, 4].map((e, index) => <div className="column border"> <a onClick={(el) => this.sendQuickReply({driver: index}) }> Item {index}</a>  </div>)
    }

}




const WidgetMade = (props) => {

    useEffect(()=>{
        renderCustomComponent(Reply, { correct: correct });
    },[])

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
    }
   const  correct = (driver) => {
       console.log("Value returned", driver);
       addUserMessage('Mensagem iniciada com o motorista escolhido, desabilitar os outros, ou ocultar')

    }
    let attbs = []
    const { className } = props
   
    attbs.push(className)

    const classMade = _.replace(_.compact(attbs).toString(), new RegExp(',', 'g'), ' ')
    return (
        <Col className={classMade}>
            <Widget {...props} handleNewUserMessage={handleNewUserMessage} />
        </Col>
    )
}
export default memo(WidgetMade)
