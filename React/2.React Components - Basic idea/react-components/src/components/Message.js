import { Component } from "react";
import './Message.css'
class Message extends Component {
    constructor(props) {
        super(props)
        console.log('Constructor');
        this.state = {
            company: 'SoftUni'
        }
    }
    componentDidMount() {
        console.log('Component Did Mount');
        setTimeout(() => {
            this.setState({ company: 'Software University' })
        }, 1000)
    }
    componentDidUpdate() {
        console.log('Component Did Update');
    }
    render() {
        // let style = {
        //     backgroundColor: 'pink',
        //     fontSize: '44'
        // }

        console.log('Render');
        // return <span style={style}>{this.props.text} | {this.state.company}</span>
        return <span className="footer-message">{this.props.text} | {this.state.company}</span>

    }
}
export default Message;