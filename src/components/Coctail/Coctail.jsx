import React from 'react';
import { Link } from 'react-router-dom';
import './Coctail.scss'


const Coctail = ({ item }) => {
    return (
        <Link to={"/coctails/" + item.id} className="coctail">
            <h2 className="coctail__name">{item.name}</h2>
            <p className="coctail__text">Fresh drink</p>
        </Link>     
    )
}

export default Coctail;