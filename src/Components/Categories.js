import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllCategories } from '../Util/api';

function Categories({ setPickedCat }) {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        getAllCategories().then((categoriesFromServer) => {
            setCategories(categoriesFromServer)
        })
    }, [])

    const handleClick = (value) => {
        setPickedCat(value)
    }

    return (
        <section className='cats'>
            <ul className='categories'>
                {categories.map((game) => {
                    return <Link to={`/categories/${game.slug}`}><li onClick={() => handleClick(game.slug)}>{game.slug}</li></Link>
                })}
            </ul>
        </section>
    );
}

export default Categories;