import React from 'react';
import PostItem from './PostItem';

function PostList(props) {
    const { posts } = props;

    return (
        <div>
            <h2>Lista postari:</h2>
            { posts.map((post, index) => {
                console.log('post',post)
                return <PostItem
                    // adaugam prop-ul id componentei UserItem
                    id={ post.id }
                    title={ post.title }
                    body={ post.body }
                    key={ index }
                />
            })}
        </div>
    );
}

export default PostList;