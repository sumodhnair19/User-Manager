import React, {Component} from 'react';
import Logo from '../Assets/Images/logo.svg';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component{
    render(){
        return(
            <header>
                <div className="brand-w-button">
                    <ul className="side-nav">
                    <li>
                      <a href='/' className="brand-logo">  <img className="brand" alt="logotype" src={Logo} /></a>
                      </li>
                  <li>
                      <Link to="/">
                          Dashboard
                      </Link>
                  </li>
                  <li>
                      <Link to="/users">

                          Users
                      </Link>
                  </li>
                  <li>
                      <Link to="/groups">

                          Groups
                      </Link>
                  </li>
              </ul>
                </div>

            </header>
        )
    }
}
export default connect(null, null)(Header);
