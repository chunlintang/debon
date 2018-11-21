import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class NavSide extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        <li>
                            <NavLink exact activeClassName="active-menu" to="/">
                                <i className="fa fa-dashboard"></i> 控制台
                            </NavLink>
                        </li>
                        {/*<li>
                            <Link to="/">
                                <i className="fa fa-desktop"></i> UI Elements
                            </Link>
                        </li>*/}
                        <li className="active">
                            <Link to="/product">
                                <i className="fa fa-list"></i> 商品
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink activeClassName="active-menu" to="/product">商品管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/user">
                                <i className="fa fa-user"></i> 用户
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink activeClassName="active-menu" to="/user">用户管理</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavSide;