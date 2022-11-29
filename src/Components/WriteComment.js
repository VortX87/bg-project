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
        console.log(newComment)

        postComment(review_id, newComment).then((res) => {
            console.log(res)
            window.location.reload(true)
        })
    }
    return (
        <div className='CommentForm'><form
            onSubmit={(e) => {
                e.preventDefault()
                HandleSubmit(user, e.target[0].value)
            }}>
            <textarea id="comments" name="comments" rows="4" cols="50" placeholder='Put your comments here....' onChange={(e) => (e.target[0].value)}></textarea>
            <button type='submit'>Submit</button>
        </form></div>
    );
}

export default WriteComment;