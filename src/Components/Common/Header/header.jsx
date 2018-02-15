import React, {Component} from 'react';
import './header.css';

const Header = (props) => {
    return (
        <header className="header">
            <h2>{props.username}'s Notes</h2>
        </header>
    );
}
export default Header