import React from 'react'
import '../App.css';
import { patchReview } from '../Util/api';
import { useParams } from 'react-router-dom'

function ReviewVotes({ singleReview }) {

    const { review_id } = useParams()

    const handleClick = () => {
        patchReview(review_id, 1).then((res) => {
            window.location.reload(true)
        })
    }

    return (
        <section><h2>Votes :{singleReview.votes}</h2>
            <button className='button64' onClick={handleClick}>Up Vote</button></section>
    );
}

export default ReviewVotes