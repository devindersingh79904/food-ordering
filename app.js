import React from 'react';
import ReactDom from 'react-dom/client';

const headingJSX = <h1>Hello, world!</h1>;

const Header = () => <h1>I am Header</h1>;

const Footer = () => <h3>I am Footer</h3>;

const App = () => (
    <div>
        <Header />
        <h2>Hello, world! from body</h2>
        <Footer />
    </div>
    );

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);
