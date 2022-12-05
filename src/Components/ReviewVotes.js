import React from 'react'
import '../App.css';
import { patchReview } from '../Util/api';
import { useParams } from 'react-router-dom'

function ReviewVotes({ singleReview }) {

    const { review_id } = useParams()
    console.log(singleReview)
    console.log(singleReview.votes)

    const handleClick = () => {
        patchReview(review_id, 1).then((res) => {
            window.location.reload(true)
            console.log(res)
        })
    }

    return (
        <div><h2>Votes :{singleReview.votes}</h2>
            <button onClick={handleClick}>Up Vote</button></div>
    );
}

export default ReviewVotes