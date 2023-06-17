import Navbar from "../../component/Navbar/NavBar";
import Header from "../../component/Navbar/Header";
import "./Search.css"
import SearchPop from "../../component/SearhPop/SearchPop";
import SeachList from "../../component/SearchList/SeachList";
import Footer from "../../component/Footer/Footer";
import footerData from "../../component/data/footer.json"




const Search =() =>{
  const SearchData = [
    { id : 1,
      "name": "Tower Street Apartments",
      "distance": "500m",
      "tag": "Free airport taxi",
      "type": "Entire studio • 1 bathroom • 21m² 1 full bed",
      "description": "Studio Apartment with Air conditioning",
      "free_cancel": true,
      "price": 112,
      "rate": 8.9,
      "rate_text": "Excellent",
      "image_url": "./images/hotel_search_1.webp"
    },
    { id : 2,
      "name": "Comfort Suites Airport",
      "distance": "200m",
      "tag": "Free Breakfast",
      "type": "Entire studio • 2 bathroom • 100m² 2 full bed",
      "description": "Studio Apartment",
      "free_cancel": true,
      "price": 140,
      "rate": 9.3,
      "rate_text": "Exceptional",
      "image_url": "./images/hotel_search_2.jpg"
    },
    { id : 3,
      "name": "Four Seasons Hotel",
      "distance": "100m",
      "tag": "Free Parking",
      "type": "1 bathroom • 51m² 2 full bed",
      "description": "Hotel in Lisbon",
      "free_cancel": false,
      "price": 99,
      "rate": 8.8,
      "rate_text": "Excellent",
      "image_url": "./images/hotel_search_3.jpg"
    }
  ]
  
  // const footerData = [
	// 	{	id : 1,
	// 		"col_number": 1,
	// 		"col_values": [
	// 			"Countries",
	// 			"Regions",
	// 			"Cities",
	// 			"Districts",
	// 			"Airports",
	// 			"Hotels"
	// 		]
	// 	},
	// 	{	id : 2,
	// 		"col_number": 2,
	// 		"col_values": [
	// 			"Homes",
	// 			"Apartments",
	// 			"Resorts",
	// 			"Villas",
	// 			"Hostels",
	// 			"Guest houses"
	// 		]
	// 	},
	// 	{	 id : 3,
	// 		"col_number": 3,
	// 		"col_values": [
	// 			"Unique places to stay",
	// 			"Reviews",
	// 			"Unpacked: Travel articles",
	// 			"Travel communities",
	// 			"Seasonal and holiday deals"
	// 		]
	// 	},
	// 	{		id : 4,
	// 		"col_number": 4,
	// 		"col_values": [
	// 			"Car rental",
	// 			"Flight Finder",
	// 			"Restaurant reservations",
	// 			"Travel Agents"
	// 		]
	// 	},
	// 	{ 	id : 5,
	// 		"col_number": 5,
	// 		"col_values": [
	// 			"Curtomer Service",
	// 			"Partner Help",
	// 			"Careers",
	// 			"Sustainability",
	// 			"Press center",
	// 			"Safety Resource Center",
	// 			"Investor relations",
	// 			"Terms & conditions"
	// 		]
	// 	}
	// ]

  return (
    <div>
       <Navbar />
       <Header />
       <div className="row"> 
          <SearchPop  className = "one-pop" />
          <SeachList items = {SearchData}  className = "one-list"/>
       </div>
        <Footer  footerData={footerData}/>
    </div>
  );
};

export default Search;
