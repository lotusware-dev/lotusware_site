import React from 'react'
import {
    Route,
    Link
} from 'react-router-dom'
import './Blog.css'
import BlogPost from './BlogPost'


const Blog = ({ match }) => (
    <div className='Blog'>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={BlogPost}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a post.</h3>
        )}/>
    </div>
)

export default Blog
