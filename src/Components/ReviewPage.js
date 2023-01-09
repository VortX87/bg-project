import React from 'react'
import '../App.css';
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getAllReviews } from '../Util/api';


function ReviewPage({ setPickedArt }) {

    const [allReviews, setAllReviews] = useState([])

    const { category } = useParams()


    useEffect(() => {
        const params = {}
        params.category = category
        // const { category, review_id } = params

        getAllReviews(params).then((allReviewFromServer) => {
            setAllReviews(allReviewFromServer)
        })
    }, [])

    const handleClick = (value) => {
        setPickedArt(value)
    }

    return (
        <section>
            <h1 className='reviewHeader'>{category}</h1>
            <ul className='reviews'>
                {allReviews.map((review) => {
                    return <ul>
                        <Link to={`/allreviews/${review.review_id}`} onClick={() => handleClick(review.review_id)}>  {review.title}</Link><br></br>
                        Designer: {review.designer}<br></br>
                        Owner: {review.owner}<br></br>
                    </ul>
                })}
            </ul>
        </section>
    );
}

export default ReviewPage;