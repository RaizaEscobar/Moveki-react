import { FormGroup, Form, Spinner } from 'react-bootstrap'
import React, { useState } from 'react'
import logo from "../images/moveki_Logo.PNG"
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';




const Cover = (props) => {
    const typesFood = [
        {
            value: "0",
            description: "All Types"
        },
        {
            value: "385",
            description: "African"
        },
        {
            value: "386",
            description: "Ethiopian"
        },
        {
            value: "389",
            description: "Chinese"
        },
        {
            value: "390",
            description: "Korean"
        },
        {
            value: "386",
            description: "Japanese"
        },
        {
            value: "432",
            description: "Spanish"
        },
        {
            value: "438",
            description: "Russian"
        },
        {
            value: "450",
            description: "Fusion"
        },
        {
            value: "436",
            description: "Italian"
        },
        {
            value: "896",
            description: "Pizzeria"
        },
        {
            value: "451",
            description: "Indian"
        },
        {
            value: "453",
            description: "Argentinian"
        },
        {
            value: "789",
            description: "Mediterranean"
        },
        {
            value: "465",
            description: "Lebanese"
        },
        {
            value: "457",
            description: "Mexican"
        },
        {
            value: "458",
            description: "Peruvian"
        },
        {
            value: "459",
            description: "American"
        },
        {
            value: "113",
            description: "International"
        },
        {
            value: "485",
            description: "Vegetarian"
        },
        {
            value: "791",
            description: "Sea Food"
        }
    ]
    const rangePrice = [
        {
            value: "15",
            description: "Up to 15€"
        },
        {
            value: "20",
            description: "Up to 20€"
        },
        {
            value: "30",
            description: "Up to 30€"
        },
        {
            value: "40",
            description: "Up to 40€"
        },
        {
            value: "50",
            description: "Up to 50€"
        },
        {
            value: "51",
            description: "> 50€"
        }]
    const [filters, setFilters] = useState({
        type: "All Types",
        price: "15",
        rating: "5"
    })
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let restaurantList = await getRestaurantList(filters.type, filters.rating, filters.price, filters.postCode);
        let indexRandom = Math.floor(Math.random() * (restaurantList.length));
        let restaurantRandom = restaurantList[indexRandom];
        setIsLoading(false);
        props.onSelected(restaurantRandom);
    }

    const callAPI = async (tagId, rating, pageNumber, price) => {
        const responseRestaurantList = await fetch(`https://thefork.p.rapidapi.com/restaurants/list?filterRestaurantTagIdList=${tagId}&pageNumber=${pageNumber}&pageSize=10&filterRateStart=${rating}&queryPlaceValueCityId=41710&filterPriceEnd=${price}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "thefork.p.rapidapi.com",
                "x-rapidapi-key": "aca3225584msha8950f36b0c8910p18946fjsnc4bd7d77b5f1"
            }
        })
        const restaurantList = await responseRestaurantList.json();
        return restaurantList;
    }

    const getRestaurantList = async (tagId, rating, price, postCode) => {
        let restaurants = [];
        let response = await callAPI(tagId, rating, 1, price);
        restaurants = restaurants.concat(response.data)
        let numberOfPages = response.meta.page.last;
        if (numberOfPages > 10) {
            numberOfPages = 10;
        }
        for (let i = 2; i <= numberOfPages; i++) {
            let r = await callAPI(tagId, rating, i, price);
            restaurants = restaurants.concat(r.data);
        }
        let filteredRestaurants = [];
        if (postCode) {
            filteredRestaurants = restaurants.filter(function (restaurant) {
                return restaurant.address.postalCode == postCode;
            });
        }
        if (filteredRestaurants.length > 0) {
            restaurants = filteredRestaurants;
        }
        return restaurants;
    }

    const handleChanges = (e) => {
        setFilters({
            ...filters,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleRating = (e) => {
        setFilters({
            ...filters,
            rating: e.currentTarget.value
        })
    }

    return (
        <div id="home" className="bg-white h-screen flex flex-col justify-center items-center pt-40 md:pt-20">
        {isLoading && <Spinner animation="border" className="fixed"/>}
            <img className=" mb-16" src={logo} alt="logo" />

            <Form onSubmit={handleSubmit} className="p-6 items-center grid gap-8 grid-cols-1 md:grid-cols-2 gap-8">
                <FormGroup>
                    <Form.Label className="mr-5" >Select de type of food</Form.Label>
                    <Form.Control onChange={handleChanges} as="select" name="type">
                        {typesFood.map((ele, index) => {
                            return <option key={index} value={ele.value}>{ele.description}</option>
                        })}
                    </Form.Control>
                </FormGroup>
                <FormGroup>
                    <Form.Label className="mr-5" >How much do you want to pay?</Form.Label>
                    <Form.Control onChange={handleChanges} as="select" name="price">
                        {rangePrice.map((ele, index) => {
                            return <option key={index} value={ele.value}>{ele.description}</option>
                        })}
                    </Form.Control>
                </FormGroup>
                <FormGroup >
                    <RangeSlider
                        value={filters.rating}
                        variant='secondary'
                        min={1}
                        max={10}
                        onChange={handleRating} 
                    />
                </FormGroup>
                <Form.Group>
                    <Form.Label className="flex flex-row">Post Code
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </Form.Label>
                    <Form.Control onChange={handleChanges} type="text" name="postCode" />
                </Form.Group>
                <button className="button">Choose for me</button>
            </Form>
        </div>
    )
}

export default Cover
