import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getReviewById } from '../Util/api'

function SingleReview({ pickedArt }) {

    const [singleReview, setSingleReview] = useState([])

    useEffect(() => {

        getReviewById(pickedArt).then((reviewFromServer) => {
            setSingleReview(reviewFromServer)
            console.log(reviewFromServer)
        })
    }, [])

    return (
        <div className='reviews'>
            <h1>{singleReview.title}</h1><br></br>
            <h2>Designer</h2>{singleReview.designer}<br></br>
            <h2>Owner</h2>{singleReview.owner}<br></br>
            <h2>Review</h2>{singleReview.review_body}<br></br>
            <img className='reviewImage' src={singleReview.review_img_url} />
        </div>
    )
}

export default SingleReview