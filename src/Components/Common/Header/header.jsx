import React, {Component} from 'react';
import './header.css';

const Header = (props) => {
    return (
        <header className="header">
            <h1>{props.title}'s Notes</h1>
        </header>
    );
}
export default Header