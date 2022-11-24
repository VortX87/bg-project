import React from 'react'
import '../App.css';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAllReviews, getReviewById } from '../Util/api';


function ReviewPage({ pickedCat }) {

    const [review, setReview] = useState([])
    const [allReviews, setAllReviews] = useState([])

    const { } = useParams()

    useEffect(() => {
        // let test = pickedCat
        const params = {}
        params.category = pickedCat

        getAllReviews(params).then((allReviewFromServer) => {
            setAllReviews(allReviewFromServer)
        })
    }, [])

    console.log(allReviews)

    return (
        <div>
            <h1 className='reviewHeader'>{pickedCat}</h1>
            <ul className='reviews'>
                {allReviews.map((review) => {
                    return <ul>
                        {review.title}<br></br>
                        {review.designer}<br></br>
                        {review.owner}<br></br>
                        {review.review_body}<br></br>
                        <img className='reviewImage' src={review.review_img_url} />
                    </ul>
                })}
            </ul>
        </div >
    );
}

export default ReviewPage;