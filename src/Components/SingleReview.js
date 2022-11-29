import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import { getReviewById } from '../Util/api'
import Comments from './Comments'
import WriteComment from './WriteComment'
import { useParams } from 'react-router-dom'

function SingleReview() {

    const { review_id } = useParams()
    console.log(review_id)

    const [singleReview, setSingleReview] = useState([])

    useEffect(() => {

        getReviewById(review_id).then((reviewFromServer) => {
            setSingleReview(reviewFromServer)
            console.log(reviewFromServer)
        })

    }, [])

    return (
        <body>
            <div className='reviews'>
                <h1>{singleReview.title}</h1><br></br>
                <h2>Designer</h2>{singleReview.designer}<br></br>
                <h2>Owner</h2>{singleReview.owner}<br></br>
                <h2>Review</h2>{singleReview.review_body}<br></br>
                <img className='reviewImage' src={singleReview.review_img_url} />
            </div>
            <div>
                <Comments />
                <WriteComment />
            </div>
        </body>
    )
}

export default SingleReview