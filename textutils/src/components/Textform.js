import React,{useState} from 'react';


export default function Textform(props) {
  const [text, setText] = useState('set name text here');
  text("vishva pansuriya");
  setText("basic concept");
  
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
    <h1>{props.heading}</h1>
   <div className="mb-3">
    <h3>Message Box</h3>
    <div className="mb-2">
 
   <label className="form-label"> Your message</label>

    <textarea 
    className="form-control" 
    value={text}
    onChange={handleChange}
    placeholder="write your message here"
    rows="5"><br />
     </textarea>
     </div>

     <button className="btn btn-primary">submit</button>
     
   </div>
    </>
  )
}


