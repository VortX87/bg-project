import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import { getReviewById } from '../Util/api'
import Comments from './Comments'
import WriteComment from './WriteComment'
import { useParams } from 'react-router-dom'
import ReviewVotes from './ReviewVotes'

function SingleReview() {

    const { review_id } = useParams()

    const [singleReview, setSingleReview] = useState([])

    useEffect(() => {

        getReviewById(review_id).then((reviewFromServer) => {
            setSingleReview(reviewFromServer)
        })

    }, [])

    return (
        <section>
            <section className='reviews'>
                <h1>{singleReview.title}</h1><br></br>
                <h2>Designer</h2>{singleReview.designer}<br></br>
                <h2>Owner</h2>{singleReview.owner}<br></br>
                <h2>Review</h2>{singleReview.review_body}<br></br><br></br>
                <img className='reviewImage' src={singleReview.review_img_url} />
                <ReviewVotes singleReview={singleReview} />
            </section>
            <section>
                <Comments />
                <WriteComment />
            </section>
        </section>
    )
}

export default SingleReview