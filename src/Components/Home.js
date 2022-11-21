import React from 'react'
import '../App.css';
import { getReviewById } from '../Util/api'



function Home() {

    console.log(getReviewById(1))
    return (
        <h1>
            BoardGame Review Project Home Page
        </h1>
    );
}

export default Home