import React from 'react';
import PostItem from './PostItem';

// Observatie: Componenta UserList a redevenit o componenta declarata cu function.
function PostList(props) {
    const { posts } = props;
    console.log(props);

    return (
        <div>
            <h2>Lista postari:</h2>
            { posts.map((post, index) => {
                console.log('post',post)
                return <PostItem
                    title={ post.title }
                    body={ post.body }
                    key={ index }
                />
            })}
        </div>
    );
}

export default PostList;