import React from 'react'
import PropTypes from 'prop-types';

// jyare biji file ma aapde js ni file banavyi hoy tyare coonect karva mate pela ma classNamename ka
// title nakheshu to ahiya pachu curly braces ma mukvanu etle ee thay jashe
//${props.mode=== 'light'? 'dark' : 'light'} isme dark kare to white white kare to dark.

export default function Navbar(props) {
  props.showAlert("Dark mode enabled", "success");
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutext}</a>
        </li>
        <li className="nav-item dropdown">
       </li> </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>

        <div className={`form-check form-switch text-${props.mode=== 'light'? 'dark' : 'light'} `}>
            <input className="form-check-input"  onClick={props.togglemode}type="checkbox" role="switch" id="switchCheckDefault" />
            <label className="form-check-label"  htmlFor="switchCheckDefault" script="light">Darkmode</label>
             </div>
      </form>
    </div>
  </div>
</nav>

</>
    
  );
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired, 
  aboutext : PropTypes.string.isRequired
}

Navbar.defultprops ={
  title : 'set title here',
  aboutext : 'about text here'
};