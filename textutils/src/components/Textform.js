import React from 'react'
// import PropTypes from 'prop-types';

export default function Textform(props) {
  return (
    <>

   <div className="container">
    <h3>Message Box</h3>
    <div className="mb-2">

   <label class="form-label"> your message</label>

    <textarea 
    class="form-control" 
    placeholder="write your message here"
    rows="5"><br />
     </textarea>
     </div>

     <button class="btn btn-primary">submit</button>
   </div>
    </>
  )
}

/* textform.propTypes ={
    title : PropTypes.string,
    aboutext : PropTypes.string
}
 */