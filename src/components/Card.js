import React from 'react'
import ImageOne from '../images/imageOne.jpg'
import {Carousel} from 'react-bootstrap'


const Card = (props) => {
    return (
        <div className= "menu-card">
            {!props.photosCarousel && <img src={ImageOne} alt="prueba" className="max-h-48 rounded mb-20 shadow md:max-h-80"/>}
            <Carousel>
                {props.photosCarousel && props.photosCarousel.map((ele, index) => {
                    return <Carousel.Item key={index}><img src={ele.source} alt="restaurant" className="max-h-48 rounded mb-20 shadow md:max-h-80"/></Carousel.Item>
                })}
            </Carousel>
            <div className= "center-card">
            <h2 className="text-2xl mb-2"> {props.name}</h2>
            {props.servesCuisine && <p className="mb-2">Type: {props.servesCuisine}</p> }
            {props.aggregateRatings && <p>Rating: {props.aggregateRatings.thefork.ratingValue}</p>}
            {props.priceRange && <p>Price average: {props.priceRange}</p> }
            {props.address && <p>Address: {props.address.street}, {props.address.postalCode} {props.address.locality}</p>}
            </div>
        </div>
    )
}

export default Card
