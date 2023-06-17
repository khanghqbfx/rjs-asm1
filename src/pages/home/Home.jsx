import Header from "../../component/Navbar/Header";
import Navbar from "../../component/Navbar/NavBar"
import React from "react";
import PageCity from "../../component/pagecity/inden";
import HotelType from "../../component/Hoteltype/HotelType";
import HotelGuss from "../../component/HotelGuss/HotelGuss";
import FormHotel from "../../component/Form/Form";
import Footer from "../../component/Footer/Footer";


const Home =() =>{
	  const DUMCITY =[
		{	
			id : 1,
			name: "Dublin",
			subText: "123 properties",
			image: "./images/city_1.webp"
		},
		{
			"id" : 2,
			"name": "Reno",
			"subText": "533 properties",
			"image": "./images/city_2.webp"
		},
		{
			"id" : 3,
			"name": "Austin",
			"subText": "532 properties",
			"image": "./images/city_3.webp"
		}
	];

	const hotelType =[
		{	id : 1,
			"name": "Hotels",
			"count": 233,
			"image": "./images/type_1.webp"
		},	
		{	id : 2,
			"name": "Apartments",
			"count": 2331,
			"image": "./images/type_2.jpg"
		},
		{	id : 3,
			"name": "Resorts",
			"count": 2331,
			"image": "./images/type_3.jpg"
		},
		{	id : 4,
			"name": "Villas",
			"count": 2331,
			"image": "./images/type_4.jpg"
		},
		{ 	id : 5,
			"name": "Cabins",
			"count": 2331,
			"image": "./images/type_5.jpg"
		}
	]
	
	const hotelGuss =[
		{	id : 1,
			"name": "Aparthotel Stare Miasto",
			"city": "Madrid",
			"price": 120,
			"rate": 8.9,
			"type": "Excellent",
			"image_url": "./images/hotel_1.webp"
		},
		{	id : 2,
			"name": "Comfort Suites Airport",
			"city": "Austin",
			"price": 140,
			"rate": 9.3,
			"type": "Exceptional",
			"image_url": "./images/hotel_2.jpg"
		},
		{	id : 3,
			"name": "Four Seasons Hotel",
			"city": "Lisbon",
			"price": 99,
			"rate": 8.8,
			"type": "Excellent",
			"image_url": "./images/hotel_3.jpg"
		},
		{	id : 4,
			"name": "Hilton Garden Inn",
			"city": "Berlin",
			"price": 105,
			"rate": 8.9,
			"type": "Excellent",
			"image_url": "./images/hotel_4.jpg"
		}
	]

	 const footerData = [
		{	id : 1,
			"col_number": 1,
			"col_values": [
				"Countries",
				"Regions",
				"Cities",
				"Districts",
				"Airports",
				"Hotels"
			]
		},
		{	id : 2,
			"col_number": 2,
			"col_values": [
				"Homes",
				"Apartments",
				"Resorts",
				"Villas",
				"Hostels",
				"Guest houses"
			]
		},
		{	 id : 3,
			"col_number": 3,
			"col_values": [
				"Unique places to stay",
				"Reviews",
				"Unpacked: Travel articles",
				"Travel communities",
				"Seasonal and holiday deals"
			]
		},
		{		id : 4,
			"col_number": 4,
			"col_values": [
				"Car rental",
				"Flight Finder",
				"Restaurant reservations",
				"Travel Agents"
			]
		},
		{ 	id : 5,
			"col_number": 5,
			"col_values": [
				"Curtomer Service",
				"Partner Help",
				"Careers",
				"Sustainability",
				"Press center",
				"Safety Resource Center",
				"Investor relations",
				"Terms & conditions"
			]
		}
	]
	
	
	
 
	return (
		<div className="header">
			<Navbar  /> 
			<Header />
			<PageCity items = {DUMCITY}  />
			<HotelType items = {hotelType} />
			<HotelGuss items = {hotelGuss} />
			<FormHotel />
			<Footer  footerData={footerData}/>
		</div>
	)
	  		
	  		

	  		

	  		
	};
export default Home


