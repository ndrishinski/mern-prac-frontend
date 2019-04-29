import React from 'react'

export default class ShowPage extends React.Component {

    

    render() {
        const {_id, title, body} = this.props.item
        return (
            <div>
                <p>{_id}</p>
                <p>{title}</p>
                <p>{body}</p> 
                <button onClick={this.props.onPress}>Delete</button>
            </div>
        )
    }
}