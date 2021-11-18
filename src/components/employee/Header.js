import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <Link to="/">Home</Link> | <Link to="/employee">Employee</Link>
            <h1> {props.title}</h1>
        </div>
    )
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Header;
