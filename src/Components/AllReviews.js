import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllReviews } from '../Util/api';

function AllReviews({ setPickedArt }) {
    const [reviews, setReview] = useState([])

    useEffect(() => {
        getAllReviews().then((reviewsFromServer) => {
            setReview(reviewsFromServer)
            console.log(reviewsFromServer)
        })
    }, [])

    const handleClick = (value) => {
        setPickedArt(value)
        console.log(value)
        console.log(typeof value)
    }

    return (
        <div>
            <ul>
                {reviews.map((review) => {
                    return <div className='articles'>
                        <ul>Title <br></br><Link to={`/allreviews/${review.review_id}`} onClick={() => handleClick(review.review_id)}>  {review.title}</Link><br></br>
                            Category <br></br>  {review.category}<br></br>
                            Owner <br></br>  {review.owner}<br></br>
                        </ul>
                    </div>
                })}
            </ul>
        </div>
    );
}


export default AllReviews;