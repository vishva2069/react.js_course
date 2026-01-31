import React ,{useState} from 'react';

 export default function TextForm(props) {

  const handleUpclick = () =>{
     console.log("uppercase was clicked" + text);
     let newText = text.toUpperCase();
     setText(newText);
  }

  const handleonChange = (event) =>{
    console.log("on change");
    setText(event.target.value);

 }
  const [text, setText] = useState('Enter Text Here');
 /*  text ="to creation";// wrong way
  setText("new text");// corecet */
  return(<>

    <div className="mb-3">
      <h1>{props.heading}</h1>
      <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8"></textarea>
    </div>

      <button className="btn btn-primary" onClick={handleUpclick}  >submit</button>
</>
  )
}