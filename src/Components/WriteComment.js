import React from 'react'
import '../App.css';
import { useParams } from 'react-router-dom'
import { postComment } from '../Util/api';

function WriteComment() {

    const { review_id } = useParams()
    const user = 'jessjelly'

    const HandleSubmit = (name, body) => {
        const newComment = {
            username: name,
            body: body
        };

        postComment(review_id, newComment).then((res) => {
            window.location.reload(true)
        })
    }
    return (
        <section className='CommentForm'><form
            onSubmit={(e) => {
                e.preventDefault()
                HandleSubmit(user, e.target[0].value)
            }}>
            <textarea id="comments" className="commentBox" rows="4" cols="50" placeholder='Put your comments here....' onChange={(e) => (e.target[0].value)}></textarea><br></br>
            <button type='submit' className='button64'>Submit</button>
        </form></section>
    );
}

export default WriteComment;