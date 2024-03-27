/**
 * Renders the Buttons component.
 * @module Buttons
 * @memberof HomePage
 *
 * @returns {JSX.Element} The rendered Buttons component.
 */
import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {
    function click () {
        console.log("clicked")
        // invoke a react link to the park search page
        window.location.href = "ParkSearch"
    }

    return (
        <div className = "homepage-button-wrapper">
            <div className = "button-container">
                <p>Learn More About Parks</p> 
                <Link className="homepage-button" to='/ParkSearch'><button className="homepage-button">Park Search</button></Link>                    
            </div> 
            <div className = "button-container">
                <p>Plan A Trip To A National Park</p>
                <Link className="homepage-button" to='/ParkPlan'><button className="homepage-button">Plan a Trip</button></Link>
            </div>
            <div className="twitter-container">
                <a className="twitter-timeline" data-height="200" href="https://twitter.com/TempleUniv?ref_src=twsrc%5Etfw">Tweets by Temple University</a>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </div>
    )
}

export default Buttons