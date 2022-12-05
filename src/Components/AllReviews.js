import React from 'react'
import '../App.css';
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllReviews } from '../Util/api';

function AllReviews({ setPickedArt }) {

    const [reviews, setReview] = useState([])
    const [sorter, SetSorter] = useState('created_at')
    const [direction, SetDirection] = useState('desc')

    useParams()

    useEffect(() => {
        const params = {}
        params.sort_by = sorter
        params.order = direction
        getAllReviews(params).then((reviewsFromServer) => {
            setReview(reviewsFromServer)
            console.log(reviewsFromServer)
        })
    }, [sorter, direction])

    const handleClick = (value) => {
        setPickedArt(value)
        console.log(value)
        console.log(typeof value)
    }

    return (
        <main>
            <div className='sortButton'>
                <select onChange={e => SetSorter(e.target.value)}>
                    <option value='created_at'>Date Created</option>
                    <option value='comment_count'>No. of Comments</option>
                    <option value='votes'>No. of Votes</option>
                </select><br></br>
                <select onChange={e => SetDirection(e.target.value)}>
                    <option value='desc'>Decending Order</option>
                    <option value='asc'>Ascending Order</option>
                </select><br></br>
            </div>
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
        </main>
    );
}


export default AllReviews;