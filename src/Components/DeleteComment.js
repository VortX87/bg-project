import React from 'react'
import '../App.css';
import { useParams } from 'react-router-dom'

function DeleteComment({ setComments }) {

    useParams()
    const user = 'jessjelly'

    return (
        <div><button>Delete</button></div>
    )
}


export default DeleteComment