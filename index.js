import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * 
 * Header
 *  logo
 *  Menu items
 * Body
 *  Search
 *  Restaurant Cards
 * Footer
 *  Copyright
 *  Links
 *  Address
 *  Contact
 *  
 */

const Header = () => {
    return(
        <div className='header'>
            <div className='logo-container'>
                <h1>Figgy</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCards = () => {
    const StyleColor = {
        backgroundColor: "#F0F0F0F0"
    }
    return (
        <div className='res-cards' style={StyleColor}>
            <img alt = 'res-logo' className='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/bf1888da-7626-4e70-a996-a13f2c82ae7c_125878.jpg'/>
            <h1>McDonald's</h1>
            <h4>Burger</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
            <div className='body'>
                <div className='search'>Search</div>
                <div className='res-container'>
                    <RestaurantCards resName="Meghna" cusines = "Burgers"/>
                    <RestaurantCards resName="KFC" cusines = "Chicken wings"/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                </div>
            </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);