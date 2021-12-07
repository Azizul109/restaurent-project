import React, { Component } from 'react';
// import DISHES from '../../data/dishes';
import JSON from '../../data/db.json';
import MenuItem from './MenuItem';


class Menu extends Component {

    state = {
        dishes: JSON
    }

    render() {

        const menuList = this.state.dishes.map(item => {
            return (
                <MenuItem dish={item}></MenuItem>
            );
        })

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        {menuList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;