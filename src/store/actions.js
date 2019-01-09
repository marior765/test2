import axios from 'axios';
import * as actionType from './consts';

export const getItems = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/posts', 
        {
            headers: {
                Accept: 'application/json'
            }
        })
        .then(r => {
            console.log(r.data);
            // console.log()
            dispatch({
                type: actionType.GET_ITEMS,
                payload: r.data
            })
        })
        .catch(err => console.log(err));
    }
}

export const readPost = id => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/posts/${id}?_embed=comments`, 
        {
            headers: {
                Accept: 'application/json'
            }
        })
        .then(r => {
            dispatch({
                type: actionType.READ_POST,
                payload: r.data
            })
        })
        .catch(err => console.log(err));
    }
}

export const postComment = (body, callback = () => {}) => {
    axios.post('http://localhost:3001/comments', body)
    .then(r => {
        // console.log(r);
        callback();
    })
    .catch(err => console.log(err));
}

export const addPost = (body, callback = () => {}) => {
    axios.post('http://localhost:3001/posts', body)
    .then(r => {
        callback();
    })
    .catch(err => console.log(err));
}