import React from 'react';

const authenticate = Login => PostsPage => {
    if(window.localStorage.getItem('isLoggedIn') !== true) {
        return <Login />;
    }
    else{
        return <PostsPage />;
    }
}

export default authenticate;