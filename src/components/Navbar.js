import React from 'react';
import PropTypes from 'prop-types';  // It help in importing PropTypes properties.
import {Link} from 'react-router-dom';


function  Navbar(props)   // Declaring Props
{
    return(
    // BackTick is used so that we can use Template Literals in the JS.  
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>  {/* Using Props */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link> {/* Using Props */}
        </li> 
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    );
}
// PropTypes are used to declare the type of props being used.
// Syntax is :  Component.propTypes={var:PropTypes.type}
Navbar.propTypes={title: PropTypes.string.isRequired,
                  aboutText: PropTypes.string}

// Default Prop Values is used to set default value of props.
// Component.defaultProps={ }
Navbar.defaultProps = {
  title: 'Set Title Here',
  aboutText: 'Set About Text'
};
export default Navbar;