import React from 'react'
import '../App.css';
import { useParams } from 'react-router-dom'
import { deleteComment } from '../Util/api';

function DeleteComment({ comment }) {

    useParams()
    const user = 'jessjelly'
    const params = comment.comment_id

    const handleClick = () => {
        deleteComment(params).then((res) => {
            window.location.reload(true)
        })
    }
    if (user === comment.author)
        return (
            <section><button className='deleteButton' onClick={handleClick}>Delete</button></section>
        )
}


export default DeleteComment