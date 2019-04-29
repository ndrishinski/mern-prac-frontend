import React from 'react'
import {Link} from 'react-router-dom'

import ShowPage from './ShowPage'
import NewPage from './NewPage'

export default class PostPage extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    this.handleView = this.handleView.bind(this)
    }

    componentDidMount() {
        this.handleView()
    }

    handleView() {
        fetch('http://localhost:4000/posts')
            .then((res) => res.json())
            .then((res) => this.setState({posts: res}))
    }

    handleDelete(id) {
        fetch('http://localhost:4000/post/' + id, {
            method: 'DELETE',
            body: this.props._id
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                this.handleView()
            })
        
    }

    listPosts() {
        return this.state.posts.map((item) => {
            return (
                <span>
                    <li key={item._id} style={{padding: 30}}>
                        <ShowPage onPress={() => this.handleDelete(item._id)} item={item} />
                    </li>
                </span>
            )
        })
    }

    render() {
        console.log(this.state.posts)
        return (
            <div>
                <ul>
                    {this.listPosts()}
                </ul>

                <div>
                    <NewPage />
                </div>
            </div>
        )
    }
}