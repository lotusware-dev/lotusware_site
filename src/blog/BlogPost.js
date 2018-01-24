import React from 'react'
import './BlogPost.css'

const BlogPost = ({ match }) => (
    <div className='Post'>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default BlogPost