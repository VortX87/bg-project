import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllCategories } from '../Util/api';
import ReviewPage from './ReviewPage';

function Categories() {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        getAllCategories().then((categoriesFromServer) => {
            setCategories(categoriesFromServer)
        })
    }, [])

    const handleClick = (a) => {
        let chosenCat = a
        console.log(chosenCat)
        console.log(typeof chosenCat)
    }

    return (
        <div>
            <ul className='categories'>
                {categories.map((game) => {
                    return <Link to={`/categories/${game.slug}`}><li onClick={() => handleClick(game.slug)}>{game.slug}</li></Link>
                })}
            </ul>
        </div>
    );
}


{/* <Link to={`/categories/${game.slug}`}></Link> */ }
{/* <button onClick={() => handleClick(game.slug)}></button> */ }
export default Categories;