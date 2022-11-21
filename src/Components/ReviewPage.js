import React from 'react'
import '../App.css';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAllReviews, getReviewById } from '../Util/api';


function ReviewPage() {

    const [review, setReview] = useState([])
    const [allReviews, setAllReviews] = useState([])

    const { } = useParams()

    useEffect(() => {

        const params = {}
        params.category = "strategy"
        // getReviewById(10).then((reviewFromServer) => {
        //     setReview(reviewFromServer)
        //     console.log(reviewFromServer)
        // })

        getAllReviews(params).then((allReviewFromServer) => {
            setAllReviews(allReviewFromServer)
        })
    }, [])

    console.log(allReviews)

    return (
        <div>
            <ul className='reviews'>
                {allReviews.map((review) => {
                    return <li>
                        {review.title}<br></br>
                        {review.designer}<br></br>
                        {review.owner}<br></br>
                        {review.review_body}<br></br>
                        <img className='reviewImage' src={review.review_img_url} />
                    </li>
                })}
            </ul>
        </div >
    );
}

export default ReviewPage;