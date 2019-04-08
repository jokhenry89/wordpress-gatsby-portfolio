import React from 'react';
import './DrawerToggleButton.scss'

const drawerToggleButton = props => (
    <button className ="toggle-button" onClick={props.clicked}>
        <div className ="toggle-button__line"/>
        <div className ="toggle-button__line"/>
        <div className ="toggle-button__line"/>

        
    </button>
);

export default drawerToggleButton;
