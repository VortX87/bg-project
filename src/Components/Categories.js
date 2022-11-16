import React from 'react'
import '../App.css';
import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllCategories } from '../Util/api';
import CategoryReviews from './CategoryReviews';

function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategories().then((categoriesFromServer) => {
            setCategories(categoriesFromServer)
            console.log(categoriesFromServer)
        })
    }, [])

    return (
        <div>
            <ul>
                {categories.map((game) => {
                    return <Link to={`/categories/${game.slug}`}><li>{game.slug}</li></Link>
                })}
            </ul>
        </div >
    );
}

export default Categories;