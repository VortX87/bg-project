import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllReviews } from '../Util/api';

function AllReviews() {
    const [reviews, setReview] = useState([])

    useEffect(() => {
        getAllReviews().then((reviewsFromServer) => {
            setReview(reviewsFromServer)
            console.log(reviewsFromServer)
        })
    }, [])

    return (
        <div>
            <ul>
                {reviews.map((review) => {
                    return <div className='articles'>
                        <ul>Title <br></br>  {review.title}<br></br>
                            Category <br></br>  {review.category}<br></br>
                            Details <br></br>  {review.review_body}<br></br>
                            Owner <br></br>  {review.owner}<br></br>
                            Designer <br></br> {review.designer}</ul></div>
                })}
            </ul>
        </div>
    );
}


export default AllReviews;