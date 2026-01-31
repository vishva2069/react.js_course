import React from 'react'
import PropTypes from 'prop-types';
// jyare biji file ma aapde js ni file banavyi hoy tyare coonect karva mate pela ma classname ka
// title nakheshu to ahiya pachu curly braces ma mukvanu etle ee thay jashe

export default function Navbar(props) {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">{props.aboutext}</a>
        </li>
        <li class="nav-item dropdown">
       </li> </ul>
       
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
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