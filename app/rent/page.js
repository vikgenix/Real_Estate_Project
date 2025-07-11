import React from "react";
import Card from "../webcomponents/Card";
import Sidebar from "../webcomponents/Sidebar";
import Footer from "../webcomponents/Footer";
import FeaturedProperties from "../webcomponents/FeaturedProperties";

const propertyData = [
  {
    id: 1,
    name: "Kapakpoy Gold Cappadosia",
    location: "Ranjingan City, Indonesia",
    price: "$235,098",
    beds: 4,
    baths: 2,
    area: "790 sqft",
    image: "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg",
  },
  {
    id: 2,
    name: "Skyline Tower",
    location: "Downtown, Toronto",
    price: "$1,200,000",
    beds: 3,
    baths: 2,
    area: "1,200 sqft",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Ocean View Villa",
    location: "Malibu, California",
    price: "$3,500,000",
    beds: 5,
    baths: 4,
    area: "3,500 sqft",
    image:
      "https://images.unsplash.com/photo-1592595896616-c37162298647?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Modern Loft",
    location: "Brooklyn, New York",
    price: "$850,000",
    beds: 2,
    baths: 1,
    area: "1,000 sqft",
    image:
      "https://images.unsplash.com/photo-1627141234469-24711efb373c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Luxury Apartment",
    location: "Paris, France",
    price: "$2,000,000",
    beds: 3,
    baths: 2,
    area: "1,500 sqft",
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "Cozy Cottage",
    location: "Lake Tahoe, California",
    price: "$750,000",
    beds: 3,
    baths: 2,
    area: "1,200 sqft",
    image:
      "https://images.unsplash.com/photo-1592595896616-c37162298647?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Charming Bungalow",
    location: "Austin, Texas",
    price: "$450,000",
    beds: 2,
    baths: 1,
    area: "800 sqft",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    name: "Stylish Studio",
    location: "San Francisco, California",
    price: "$600,000",
    beds: 1,
    baths: 1,
    area: "600 sqft",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    name: "Elegant Townhouse",
    location: "New York City, New York",
    price: "$3,200,000",
    beds: 4,
    baths: 3,
    area: "2,500 sqft",
    image:
      "https://images.unsplash.com/photo-1647579350413-a6ada4e480ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    name: "Rustic Farmhouse",
    location: "Napa Valley, California",
    price: "$1,800,000",
    beds: 5,
    baths: 4,
    area: "3,000 sqft",
    image:
      "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
  },
  {
    id: 11,
    name: "Contemporary Condo",
    location: "Seattle, Washington",
    price: "$900,000",
    beds: 2,
    baths: 2,
    area: "1,100 sqft",
    image:
      "https://images.unsplash.com/photo-1608429835892-30be51ea4d6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
  },
  {
    id: 12,
    name: "Beachfront Property",
    location: "Miami, Florida",
    price: "$4,500,000",
    beds: 6,
    baths: 5,
    area: "4,000 sqft",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
  },
  {
    id: 13,
    name: "Luxury Penthouse",
    location: "Dubai, UAE",
    price: "$7,000,000",
    beds: 4,
    baths: 4,
    area: "3,500 sqft",
    image:
      "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
  },
  {
    id: 14,
    name: "Chic Apartment",
    location: "Barcelona, Spain",
    price: "$1,200,000",
    beds: 3,
    baths: 2,
    area: "1,400 sqft",
    image:
      "https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgxfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
  },
  {
    id: 15,
    name: "Spacious Villa",
    location: "Santorini, Greece",
    price: "$2,500,000",
    beds: 5,
    baths: 4,
    area: "3,200 sqft",
    image:
      "https://images.unsplash.com/photo-1668911495278-487418f8f72d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
  },
  {
    id: 16,
    name: "Urban Loft",
    location: "Chicago, Illinois",
    price: "$1,500,000",
    beds: 3,
    baths: 2,
    area: "1,800 sqft",
    image:
      "https://images.unsplash.com/photo-1635108199650-8115b597e283?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI2fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
  },
  {
    id: 17,
    name: "Elegant Estate",
    location: "Los Angeles, California",
    price: "$5,000,000",
    beds: 6,
    baths: 5,
    area: "4,500 sqft",
    image:
      "https://plus.unsplash.com/premium_photo-1677782975062-56111703e90e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIxfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
  },
  {
    id: 18,
    name: "Modern Farmhouse",
    location: "Portland, Oregon",
    price: "$1,800,000",
    beds: 4,
    baths: 3,
    area: "2,200 sqft",
    image:
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQwfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
  },
  {
    id: 19,
    name: "Luxury Villa",
    location: "Bali, Indonesia",
    price: "$3,000,000",
    beds: 5,
    baths: 4,
    area: "3,800 sqft",
    image:
      "https://images.unsplash.com/photo-1676500684456-99f21e42a6fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQzfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
  },
  {
    id: 20,
    name: "Charming Cottage",
    location: "Savannah, Georgia",
    price: "$600,000",
    beds: 2,
    baths: 1,
    area: "1,000 sqft",
    image:
      "https://images.unsplash.com/photo-1430285561322-7808604715df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY0fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
  },
];

function page() {
  return (
    <div>
      <Sidebar
        component={
          <>
            <FeaturedProperties
              name="Rent These Properties"
              properties={propertyData}
            />
          </>
        }
      />
    </div>
  );
}

export default page;