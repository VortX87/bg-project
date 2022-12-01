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
        console.log(value)
        console.log(typeof value)
    }

    return (
        <div className='cats'>
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

{/* <Link to={`/categories/${game.slug}`}></Link> */ }
export default Categories;