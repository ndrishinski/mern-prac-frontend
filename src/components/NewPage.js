import React from 'react'

export default class NewPage extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e, state) {
        console.log(state)
        e.preventDefault();
        fetch('http://localhost:4000/new', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(state)
        })

        .then(res => res.json())
        .then(res => console.log(res))
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e, this.state)} style={{marginBottom: 50}}>
                    <label>Title
                        <input type="text" name="title" onChange={this.handleChange.bind(this)}/>
                    </label>
                    <label>Body
                        <input type="text" name="body" onChange={this.handleChange.bind(this)} />
                    </label>

                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}