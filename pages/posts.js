import React, { Component } from 'react';
import { getPosts } from '../actions';

class Posts extends Component {

    static async  getInitialProps() {
        const posts = await getPosts()

        return { posts }
    }
    render() {
        const { posts } = this.props;
        return (
            <div>
                <p>Hi i am posts page</p>
                {posts.map(p => (
                    <ul>
                        <li key={p.id}>
                            <span>{p.id}</span>
                            <span>{p.title}</span>
                        </li>
                    </ul>
                ))}
            </div>
        )
    }
}

export default Posts;