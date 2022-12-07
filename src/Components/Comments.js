import React from 'react'
import '../App.css';
import { useEffect, useState } from 'react'
import { getCommentsById } from '../Util/api'
import { useParams } from 'react-router-dom'
import DeleteComment from './DeleteComment';

function Comments() {

    const [comments, setComments] = useState([])
    const { review_id } = useParams()

    useEffect(() => {

        getCommentsById(review_id).then((commentFromServer) => {
            setComments(commentFromServer)
        })
    }, [])
    return (
        <div><h2 className='commentHead'>Comments</h2>
            {comments.map((comment) => {
                return <div className='comments'><ul>
                    {comment.body}<br></br>
                    {comment.author}<br></br>
                </ul>
                    <DeleteComment comment={comment} />
                </div>
            })}

        </div>
    );
}

export default Comments;