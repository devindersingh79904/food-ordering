import React from 'react';
import ReactDom from 'react-dom/client';

const headingJSX = <h1>Hello, world!</h1>;

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png" />                
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

const styleCard = {
    backgroundColor: '#f0f0f0',
}
const RestaurantCard = ()=>(
    <div className="rest-card" style={styleCard}>
        <img className="rest-logo" alt="rest-img" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg?fit=around|750:500&crop=750:500;*,*" />
        <h3>Kapoor's Kafe</h3>
        <h4>Biryani,north Indian,Asian</h4>
        <h4>4.4 Stars</h4>
        <h4>38 minutes</h4>
    </div>
)
const Body = ()=> (
    <div className="body">
        <div className="search">
            <input type="text" placeholder="Search for restaurants" />
            <button>Search</button>
        </div>
        <div className="rest-container">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    </div>
);
const Footer = () => <h3>I am Footer</h3>;

const AppLayout = () => (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
    );

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
