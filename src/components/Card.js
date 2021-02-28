import React from 'react'
import ImageOne from '../images/Background/1.jpg'
import {Carousel} from 'react-bootstrap'


const Card = (props) => {
    return (
        <div className= "menu-card">
            {!props.photosCarousel && <img src={ImageOne} alt="prueba" className="h-full rounded mb-20 shadow"/>}
            <Carousel>
                {props.photosCarousel && props.photosCarousel.map((ele, index) => {
                    return <Carousel.Item><img src={ele["612x344"]} alt="restaurant" className="h-full rounded mb-20 shadow"/></Carousel.Item>
                })}
            </Carousel>
            <div className= "center-card">
            <h2 className="text-2xl mb-2"> {props.name}</h2>
            <p className="mb-2">Type: {props.servesCuisine}</p> 
            {props.aggregateRatings && <p>Rating: {props.aggregateRatings.thefork.ratingValue}</p>}
            <p>Price average: {props.priceRange}</p> 
            {props.address && <p>Address: {props.address.street}, {props.address.postalCode} {props.address.locality}</p>}
            </div>
        </div>
    )
}

export default Card
