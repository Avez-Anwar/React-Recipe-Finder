import React from 'react'
import "./Display.css"
import DisplayLogo from "../images/logo.svg"

function Display(props) {
    console.log(props.posts)
    return (
        <div className="display_grid" >
            <div className="display__recipe">
                <img src={props.posts.image} alt="" />
                <h3>{props.posts.label}</h3>
                <p>Ingredients</p>
                <p>See more</p>
            </div>
            {/* <div className="display__recipe">
                <img src={DisplayLogo} alt="" />
                <h3>Content Name</h3>
                <p>Ingredients</p>
                <p>See more</p>
            </div>
            <div className="display__recipe">
                <img src={DisplayLogo} alt="" />
                <h3>Content Name</h3>
                <p>Ingredients</p>
                <p>See more</p>
            </div>
            <div className="display__recipe">
                <img src={DisplayLogo} alt="" />
                <h3>Content Name</h3>
                <p>Ingredients</p>
                <p>See more</p>
            </div>
            <div className="display__recipe">
                <img src={DisplayLogo} alt="" />
                <h3>Content Name</h3>
                <p>Ingredients</p>
                <p>See more</p>
            </div>
            <div className="display__recipe">
                <img src={DisplayLogo} alt="" />
                <h3>Content Name</h3>
                <p>Ingredients</p>
                <p>See more</p>
            </div>
            <div className="display__recipe">
                <img src={DisplayLogo} alt="" />
                <h3>Content Name</h3>
                <p>Ingredients</p>
                <p>See more</p>
            </div>
            <div className="display__recipe">
                <img src={DisplayLogo} alt="" />
                <h3>Content Name</h3>
                <p>Ingredients</p>
                <p>See more</p>
            </div>
            <div className="display__recipe">
                <img src={DisplayLogo} alt="" />
                <h3>Content Name</h3>
                <p>Ingredients</p>
                <p>See more</p>
            </div>
            <div className="display__recipe">
                <img src={DisplayLogo} alt="" />
                <h3>Content Name</h3>
                <p>Ingredients</p>
                <p>See more</p>
            </div> */}
        </div >
    )
}

export default Display
