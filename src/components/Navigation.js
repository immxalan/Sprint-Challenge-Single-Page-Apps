import { Tab, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import React from "react";


const Nav = props => (
    <NavLink exact {...props}
     activeClassName='active'/>
);
const panes =[
{menuItem: <Menu.Item key='home' as={Nav} to={'/'} content="Home " />},
{menuItem: <Menu.Item key='characters' as={Nav} to={'/characters'} content=" Characters " />},
{menuItem: <Menu.Item key='search' as={Nav} to={'/search'} content=" Search" />},
    ]

const Navigation = () => <Tab panes={panes} />

export default Navigation 