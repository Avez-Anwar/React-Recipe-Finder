import React, { useState } from 'react'
import "./Header.css"
import burgerLogo from "../images/logo.svg"
import SearchIcon from '@material-ui/icons/Search';
import Display from '../DisplayRecipe/Display';
import axios from 'axios';


function Header() {
    const [timeoutId, setTimeoutId] = useState()
    const [fetchData, setFetchData] = useState([])

    const API_ID = "5f5b1dbd"
    const API_KEY = "0eaa790ae8de429e56157e8de9b91bff"


    const fetchRecipe = async (searchEvent) => {
        const response = await axios.get(`https://api.edamam.com/search?q=${searchEvent}&app_id=${API_ID}&app_key=${API_KEY}`)

        console.log(response.data.hits)
        setFetchData(response.data.hits)
    }
    //    without javaScript Debouncing
    // const handleChange = (e) => {
    //     fetchRecipe(e.target.value)
    // }

    // with javaScript Debouncing

    const handleChange = (e) => {
        const timeout = setTimeout(() => fetchRecipe(e.target.value), 500)
        setTimeoutId(timeout)
        clearTimeout(timeoutId)
    }
    return (
        <div className="main__header">
            <div className="main__flexDiv">
                <div className="main__recipeName">
                    <img src={burgerLogo} alt="" />
                    <h3>Recipe Finder</h3>
                </div>

                <div className="main__inputLogo">
                    <SearchIcon style={{
                        color: "#939393", fontSize: "25px", marginTop: "7px", paddingLeft: "7px"
                    }} />
                    <input type="text" onChange={handleChange} />
                </div>
            </div>
            <div className="main__map">
                {fetchData.map((posts, index) => {
                    return <Display key={index} posts={posts.recipe} />
                })}
            </div>


        </div>
    )
}

export default Header
